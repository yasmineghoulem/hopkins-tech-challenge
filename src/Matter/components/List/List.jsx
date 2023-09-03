import { connect, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {
  fetchMatterDetailsRequest,
  fetchMatterListRequest,
  setAreaOfLawFilter,
  setCurrentPageNumber,
} from '../../model/actions';
import {
  selectCurrentPageNumber,
  selectCurrentPageSize,
  selectAreaOfLawFilter,
  selectError,
  selectMatterList,
  selectLoadingState,
  selectNumberOfMetters,
} from '../../model/selectors';
import { NoData, Error, Loader, RadioGroup } from 'shared/components';
import { Table } from 'antd';

import './List.scss';
import { AREAS_OF_LAW_VALUES, COLUMNS } from 'Matter/enums';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const List = ({
  matterList,
  isLoading,
  error,
  areaOfLawFilter,
  fetchMatterListRequest,
  currentPageNumber,
  currentPageSize,
  numberOfMetters,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const rowClickHandler = ({ _id }) => {
    dispatch(fetchMatterDetailsRequest(_id));
    history.push(`/details/${_id}`);
  };

  const handleChangeAreaOfLawFilter = (e) => {
    const filterValue = e.target.value;
    dispatch(setAreaOfLawFilter(filterValue));
  };

  const handleChangePageNumber = (pagination) => {
    dispatch(setCurrentPageNumber(pagination.current));
  };

  useEffect(() => {
    dispatch(
      fetchMatterListRequest({
        pageNumber: currentPageNumber,
        areaOfLaw: areaOfLawFilter,
      })
    );
  }, [areaOfLawFilter, currentPageNumber, fetchMatterListRequest, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

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
          total: numberOfMetters,
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
  numberOfMetters: selectNumberOfMetters(state),
  currentPageNumber: selectCurrentPageNumber(state),
});

const mapDispatchToProps = {
  fetchMatterListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
