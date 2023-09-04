import { MATTER } from './actions';

const initialState = {
  isLoading: true, // Indicates whether data is loading initially
  selectedMatterId: '', // Stores the ID of the currently selected matter (if any)
  areaOfLawFilter: '', // Stores the filter value for the area of law
  matterList: [], // Stores the list of matter data
  error: null, // Stores any error that occurred during data fetching
  detailsCache: {}, // Caches matter details to avoid unnecessary re-fetching
  numberOfMatters: 0, // Stores the total number of matters based on the filters
  currentPageSize: 0, // Stores the current page size for pagination
  currentPageNumber: 1, // Stores the current page number for pagination
};

function matterReducer(state = initialState, action) {
  switch (action.type) {
    case MATTER.FETCH_LIST.REQUEST:
      // When a request is made to fetch matter list
      return {
        ...state,
        error: null,
        isLoading: true,
        pageNumber: action.payload.pageNumber,
        areaOfLaw: action.payload.areaOfLaw,
      };

    case MATTER.FETCH_LIST.SUCCESS:
      // When matter list data is successfully fetched
      return {
        ...state,
        matterList: action.payload.data,
        isLoading: false,
        numberOfMatters: action.payload.meta.numberOfDocuments,
        currentPageSize: action.payload.meta.pageSize,
      };

    case MATTER.FETCH_LIST.ERROR:
      // When there is an error fetching matter list
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case MATTER.FETCH_DETAILS.REQUEST:
      // When a request is made to fetch matter details
      return {
        ...state,
        isLoading: true,
        error: null,
        selectedMatterId: action.payload,
      };

    case MATTER.FETCH_DETAILS.SUCCESS:
      // When matter details are successfully fetched
      return {
        ...state,
        isLoading: false,
        detailsCache: {
          ...state.detailsCache,
          [action.payload._id]: action.payload,
        },
      };

    case MATTER.FETCH_DETAILS.ERROR:
      // When there is an error fetching matter details
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        detailsCache: {
          ...state.detailsCache,
          [action.payload._id]: null,
        },
      };

    case MATTER.FILTERS.AREAOFLAW:
      // When the area of law filter is set
      return {
        ...state,
        areaOfLawFilter: action.payload,
        currentPageNumber: 1, // Reset current page to 1 when filter changes
      };
    case MATTER.FILTERS.PAGENUMBER:
      // When the current page number is changed
      return {
        ...state,
        currentPageNumber: action.payload,
      };
    default:
      // Return the current state for any other action
      return state;
  }
}

export default matterReducer;
