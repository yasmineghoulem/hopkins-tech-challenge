import _ from 'lodash';

export const selectState = (state) => _.get(state, 'matter');
export const selectDetailsCache = (state) => _.get(state, 'detailsCache');

export const selectDetailsById = _.curry((matterId, state) => {
  return _.chain(state).thru(selectState).thru(selectDetailsCache).get(matterId).value();
});

// Select the matter list from the matter state
export const selectMatterList = (state) => {
  return _.get(selectState(state), 'matterList', state.matter.matterList);
};

export const selectLoadingState = (state) => {
  return _.get(selectState(state), 'isLoading', true);
};

// Selector for error
export const selectError = (state) => {
  return _.get(selectState(state), 'error', null);
};

// Selector for currentPageNumber
export const selectCurrentPageNumber = (state) => {
  return _.get(selectState(state), 'currentPageNumber', 1);
};

// Selector for areaOfLowFilter
export const selectAreaOfLawFilter = (state) => {
  return _.get(selectState(state), 'areaOfLawFilter', '');
};

// Selector for numberOfMetters
export const selectNumberOfMetters = (state) => {
  return _.get(selectState(state), 'numberOfMetters', 0);
};

// Selector for currentPageSize
export const selectCurrentPageSize = (state) => {
  return _.get(selectState(state), 'currentPageSize', 0);
};