import { DETAILSCOLUMNS } from 'Matter/enums';
import { fetchMatterDetailsRequest } from 'Matter/model/actions';
import {
  selectDetailsById,
  selectError,
  selectLoadingState,
} from 'Matter/model/selectors';
import { Table } from 'antd';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { BackNavigation, Error, Loader, NoData } from 'shared/components';

export const Details = ({ details, isLoading, error }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // Use your API call function to fetch details
    if (details === undefined) {
      dispatch(fetchMatterDetailsRequest(id));
    }
  }, [dispatch, id, details]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!details) {
    return <NoData />;
  }

  return (
    <div>
      <BackNavigation />
      <h2>{details.title}</h2>

      <Table
        dataSource={details.tasks}
        columns={DETAILSCOLUMNS}
        rowKey={(record) => record._id}
        pagination={false}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: selectError(state),
  isLoading: selectLoadingState(state),
  details: selectDetailsById(state.matter.selectedMatterId, state),
});

const mapDispatchToProps = { fetchMatterDetailsRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Details);
