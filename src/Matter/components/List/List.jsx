import { Table } from 'antd';
import {
  fetchMatterDetailsRequest,
  fetchMatterListRequest,
  setCurrentPageNumber,
  setAreaOfLawFilter,
} from '../../model/actions';
import {
  selectError,
  selectMatterList,
  selectLoadingState,
  selectCurrentPageSize,
  selectNumberOfMatters,
  selectAreaOfLawFilter,
  selectCurrentPageNumber,
} from '../../model/selectors';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { AREAS_OF_LAW_VALUES, COLUMNS } from 'Matter/enums';
import { NoData, Error, Loader, RadioGroup } from 'shared/components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './List.scss';

const List = ({
  fetchMatterListRequest,
  currentPageNumber,
  areaOfLawFilter,
  currentPageSize,
  numberOfMatters,
  matterList,
  isLoading,
  error,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // Handles clicking on a row to navigate to matter details.
  // @param {Object} record
  const rowClickHandler = ({ _id }) => {
    fetchMatterDetailsRequest(_id);
    history.push(`/details/${_id}`);
  };

  // Handles changing the area of law filter.
  const handleChangeAreaOfLawFilter = (e) => {
    const filterValue = e.target.value;
    dispatch(setAreaOfLawFilter(filterValue));
  };

  // Handles changing the page number.
  const handleChangePageNumber = (pagination) => {
    dispatch(setCurrentPageNumber(pagination.current));
  };

  useEffect(() => {
    // Trigger a request to fetch the list of matters when dependencies change.
    fetchMatterListRequest({
      pageNumber: currentPageNumber,
      areaOfLaw: areaOfLawFilter,
    });
  }, [areaOfLawFilter, currentPageNumber, fetchMatterListRequest, dispatch]);

  // Display a loader component if data is currently being loaded.
  if (isLoading) {
    return <Loader />;
  }

  // Display an error message component if an error occurred during data fetching.
  if (error) {
    return <Error message={error} />;
  }

  // Display a "No Data" component if the list of matters is empty.
  if (matterList.length === 0) {
    return <NoData />;
  }

  return (
    <div>
      <div className='title-filter-wrapper'>
        <h3>My Cases</h3>
        <RadioGroup
          value={areaOfLawFilter}
          options={AREAS_OF_LAW_VALUES}
          onChange={handleChangeAreaOfLawFilter}
        />
      </div>
      <Table
        columns={COLUMNS}
        dataSource={matterList}
        pagination={{
          total: numberOfMatters,
          pageSize: currentPageSize,
          current: currentPageNumber,
        }}
        onChange={handleChangePageNumber}
        rowKey={(record) => record._id}
        onRow={(record) => ({
          onClick: () => rowClickHandler(record),
        })}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: selectError(state),
  matterList: selectMatterList(state),
  isLoading: selectLoadingState(state),
  areaOfLawFilter: selectAreaOfLawFilter(state),
  currentPageSize: selectCurrentPageSize(state),
  numberOfMatters: selectNumberOfMatters(state),
  currentPageNumber: selectCurrentPageNumber(state),
});

const mapDispatchToProps = {
  fetchMatterListRequest, // Maps the fetchMatterListRequest action to a component prop.
};

// This connects the component to the Redux store, allowing it to dispatch
// actions and access state properties as defined in mapStateToProps.
export default connect(mapStateToProps, mapDispatchToProps)(List);
