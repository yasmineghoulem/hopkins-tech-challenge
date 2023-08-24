import { MATTERS } from './actions';

const initialState = {};

// example of a reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MATTERS.FETCH.REQUEST:
    default:
      return state;
  }
}
