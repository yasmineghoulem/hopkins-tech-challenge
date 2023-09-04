import {
  selectDetailsById,
  selectError,
  selectLoadingState,
} from 'Matter/model/selectors';
import { Table } from 'antd';
import { useEffect } from 'react';
import { DETAILSCOLUMNS } from 'Matter/enums';
import { connect, useDispatch } from 'react-redux';
import { fetchMatterDetailsRequest } from 'Matter/model/actions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { BackNavigation, Error, Loader, NoData } from 'shared/components';

export const Details = ({ details, isLoading, error }) => {
  const { id } = useParams(); // Accessing the 'id' parameter from the URL
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch details when the component when 'details' is undefined to prevent refrech problem.
    if (details === undefined) {
      dispatch(fetchMatterDetailsRequest(id)); // fetch matter details based on the 'id'.
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
        columns={DETAILSCOLUMNS} // Render a table with columns based on the 'DETAILSCOLUMNS' constant.
        rowKey={(record) => record._id} // Assign a unique key to each row.
        pagination={false} // Disable pagination for the table.
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: selectError(state),
  isLoading: selectLoadingState(state),
  details: selectDetailsById(state.matter.selectedMatterId, state),
});

// Map the action creator to component props.
const mapDispatchToProps = { fetchMatterDetailsRequest };

// Connect the component to the Redux store and export it.
export default connect(mapStateToProps, mapDispatchToProps)(Details);
