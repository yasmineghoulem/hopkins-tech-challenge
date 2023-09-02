import { connect, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {
  fetchMatterListRequest,
  setAreaOfLowFilter,
  setCurrentPageNumber,
} from '../../model/actions';
import { selectMatterList } from '../../model/selectors';
import { NoData, Error, Loader, RadioGroup } from 'shared/components';
import { Table } from 'antd';

import './List.scss';
import { AREAS_OF_LAW_VALUES, COLUMNS } from 'Matter/enums';

const List = ({
  matterList,
  isLoading,
  error,
  areaOfLowFilter,
  fetchMatterListRequest,
  currentPageNumber,
}) => {
  const dispatch = useDispatch();

  const handleChangeAreaOfLowFilter = (e) => {
    const filterValue = e.target.value;
    dispatch(setAreaOfLowFilter(filterValue));
  };

  const handleChangePageNumber = (pagination) => {
    dispatch(setCurrentPageNumber(pagination.current));
  };

  useEffect(() => {
    fetchMatterListRequest({ pageNumber: 1, areaOfLaw: areaOfLowFilter });
  }, [areaOfLowFilter, fetchMatterListRequest, currentPageNumber]);

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
          options={AREAS_OF_LAW_VALUES}
          value={areaOfLowFilter}
          onChange={handleChangeAreaOfLowFilter}
        />
      </div>
      <Table
        dataSource={matterList}
        columns={COLUMNS}
        pagination={{
          pageSize: 10,
          total: 200,
          current: currentPageNumber,
        }}
        onChange={handleChangePageNumber}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  matterList: selectMatterList(state),
  isLoading: state.matter.isLoading,
  error: state.matter.error,
  areaOfLowFilter: state.matter.areaOfLowFilter,
  currentPageNumber: state.matter.currentPageNumber,
});

const mapDispatchToProps = {
  fetchMatterListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
