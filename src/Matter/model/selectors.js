import _ from 'lodash';

// Select the 'matter' slice of the state
export const selectState = (state) => _.get(state, 'matter');

// Select the 'detailsCache' slice of the state
export const selectDetailsCache = (state) => _.get(state, 'detailsCache');

// Select matter details by ID from the 'detailsCache' based on matterId
export const selectDetailsById = _.curry((matterId, state) => {
  return _.chain(state)
    .thru(selectState)
    .thru(selectDetailsCache)
    .get(matterId)
    .value();
});

// Select the matter list from the 'matter' state
export const selectMatterList = (state) => {
  return _.get(selectState(state), 'matterList', state.matter.matterList);
};

// Select the loading state for matter data
export const selectLoadingState = (state) => {
  return _.get(selectState(state), 'isLoading', true);
};

// Select the error state for matter data
export const selectError = (state) => {
  return _.get(selectState(state), 'error', null);
};

// Select the current page number for matter filtering and pagination
export const selectCurrentPageNumber = (state) => {
  return _.get(selectState(state), 'currentPageNumber', 1);
};

// Select the areaOfLawFilter for matter filtering
export const selectAreaOfLawFilter = (state) => {
  return _.get(selectState(state), 'areaOfLawFilter', '');
};

// Select the total number of matters for pagination
export const selectNumberOfMatters = (state) => {
  return _.get(selectState(state), 'numberOfMatters', 0);
};

// Select the current page size for pagination
export const selectCurrentPageSize = (state) => {
  return _.get(selectState(state), 'currentPageSize', 0);
};
