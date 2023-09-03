import {
  MATTER,
} from './actions';

const initialState = {
  isLoading: true,
  selectedMatterId: '',
  areaOfLawFilter: '',
  matterList: [],
  error: null,
  detailsCache: {},
  numberOfMetters: 0,
  currentPageSize: 0,
  currentPageNumber: 1,
};

function matterReducer(state = initialState, action) {
  switch (action.type) {
    case MATTER.FETCH_LIST.REQUEST:
      return {
        ...state,
        error: null,
          isLoading: true,
          pageNumber: action.payload.pageNumber,
          areaOfLaw: action.payload.areaOfLaw,
      };

    case MATTER.FETCH_LIST.SUCCESS:
      return {
        ...state,
        matterList: action.payload.data,
          isLoading: false,
          numberOfMetters: action.payload.meta.numberOfDocuments,
          currentPageSize: action.payload.meta.pageSize,
      };

    case MATTER.FETCH_LIST.ERROR:
      return {
        ...state,
        isLoading: false,
          error: action.payload,
      };


    case MATTER.FETCH_DETAILS.REQUEST:
      return {
        ...state,
        isLoading: true,
          error: null,
          selectedMatterId: action.payload,
      };

    case MATTER.FETCH_DETAILS.SUCCESS:
      return {
        ...state,
        isLoading: false,
          detailsCache: {
            ...state.detailsCache,
            [action.payload._id]: action.payload,
          },
      };

    case MATTER.FETCH_DETAILS.ERROR:
      return {
        ...state,
        isLoading: false,
          error: action.payload,
          detailsCache: {
            ...state.detailsCache,
            [action.payload._id]: null,
          },
      };

    case MATTER.FELTERS.AREAOFLAW:
      return {
        ...state,
        areaOfLawFilter: action.payload,
          currentPageNumber: 1,
      };
    case MATTER.FELTERS.PAGENUMBER:
      return {
        ...state,
        currentPageNumber: action.payload,
      };
    default:
      return state;
  }
}

export default matterReducer;