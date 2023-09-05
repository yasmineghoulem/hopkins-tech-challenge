import {
  selectDetailsById,
  selectError,
  selectLoadingState,
} from 'Matter/model/selectors';
import { Table } from 'antd';
import { useEffect } from 'react';
import { DETAILSCOLUMNS } from 'Matter/enums';
import { connect } from 'react-redux';
import { fetchMatterDetailsRequest } from 'Matter/model/actions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { BackNavigation, Error, Loader, NoData } from 'shared/components';

export const Details = ({
  details,
  isLoading,
  error,
  fetchMatterDetailsRequest,
}) => {
  const { id } = useParams(); // Accessing the 'id' parameter from the URL

  useEffect(() => {
    // fetch details when the component when 'details' is undefined to prevent refrech problem.
    fetchMatterDetailsRequest(id); // fetch matter details based on the 'id'.
  }, [id, fetchMatterDetailsRequest]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <BackNavigation />
      {!details ? <h2>Sorry! No Title</h2> : <h2>{details.title}</h2>}
      {error ? (
        <Error message={error} />
      ) : !details ? (
        <NoData /> // Display NoData component when there's no data
      ) : (
        <Table
          dataSource={details.tasks}
          columns={DETAILSCOLUMNS}
          rowKey={(record) => record._id}
          pagination={false}
        />
      )}
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
