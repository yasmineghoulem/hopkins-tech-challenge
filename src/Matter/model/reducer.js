import {
  MATTER,
} from './actions';

const initialState = {
  matterList: [],
  matterDetails: null,
  isLoading: undefined,
  error: null,
  currentPageNumber: 1,
  areaOfLowFilter: '',
};

function matterReducer(state = initialState, action) {
  switch (action.type) {
    case MATTER.FETCH_LIST.REQUEST:
      return {
        ...state,
        isLoading: true,
          error: null,
          pageNumber: action.payload.pageNumber,
          areaOfLaw: action.payload.areaOfLaw,
      };

    case MATTER.FETCH_LIST.SUCCESS:
      return {
        ...state,
        isLoading: false,
          matterList: action.payload,
      };

    case MATTER.FETCH_LIST.ERROR:
      return {
        ...state,
        isLoading: false,
          error: action.payload,
      };
    case 'SET_AREA_OF_LOW_FILTER':
      return {
        ...state,
        areaOfLowFilter: action.payload,
      };
    case 'SET_CURRENT_PAGE_NUMBER':
      return {
        ...state,
        currentPageNumber: action.payload,
      };
    default:
      return state;
  }
}

export default matterReducer;