import _ from 'lodash';

export const selectState = (state) => _.get(state, 'matters');

// example of a selector, doesn't force you to use a specific data structure
export const selectMatterById = _.curry((matterId, state) =>
  _.chain(state).thru(selectState).get(matterId).value()
);

// write your selectors here
