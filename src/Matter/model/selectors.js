import _ from 'lodash';

export const selectState = (state) => _.get(state, 'matter');

// example of a selector, doesn't force you to use a specific data structure
export const selectMatterById = _.curry((matterId, state) =>
  _.chain(state).thru(selectState).get(matterId).value()
);

// Select the matter list from the matter state
export const selectMatterList = (state) => {
  return _.get(selectState(state), 'matterList', []);
};

export const selectLoadingState = (state) => {
  return _.get(selectState(state), 'isLoading', []);
};