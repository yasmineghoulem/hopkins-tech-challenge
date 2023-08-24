import { MATTER } from './actions';

const initialState = {};

// example of a reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MATTER.FETCH_LIST.REQUEST:
    default:
      return state;
  }
}
