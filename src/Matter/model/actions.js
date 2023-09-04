// Matter Actions
export const MATTER = {
  FETCH_LIST: {
    REQUEST: 'MATTER.FETCH_LIST.REQUEST',
    SUCCESS: 'MATTER.FETCH_LIST.SUCCESS',
    ERROR: 'MATTER.FETCH_LIST.ERROR',
  },
  FETCH_DETAILS: {
    REQUEST: 'MATTER.FETCH_DETAILS.REQUEST',
    SUCCESS: 'MATTER.FETCH_DETAILS.SUCCESS',
    ERROR: 'MATTER.FETCH_DETAILS.ERROR',
  },
  FILTERS: {
    // Action type for setting the area of law filter
    AREAOFLAW: 'SET_AREA_OF_LOW_FILTER',
    // Action type for setting the current page number
    PAGENUMBER: 'SET_CURRENT_PAGE_NUMBER',
  },
};

// Action creator for requesting matter list
export const fetchMatterListRequest = (data) => ({
  type: MATTER.FETCH_LIST.REQUEST,
  payload: data, // Data to be sent with the action
});

// Action creator for successful matter list retrieval
export const fetchMatterListSuccess = (data) => ({
  type: MATTER.FETCH_LIST.SUCCESS,
  payload: data, // The data received from the successful request
});

// Action creator for matter list retrieval error
export const fetchMatterListError = (error) => ({
  type: MATTER.FETCH_LIST.ERROR,
  payload: error, // Error information in case of failure
});

// Action creator for setting the area of law filter
export const setAreaOfLawFilter = (filterValue) => ({
  type: MATTER.FILTERS.AREAOFLAW,
  payload: filterValue, // The value representing the area of law filter
});

// Action creator for setting the current page number
export const setCurrentPageNumber = (currentPageNumber) => ({
  type: MATTER.FILTERS.PAGENUMBER,
  payload: currentPageNumber, // The current page number
});

// Action creator for requesting matter details
export const fetchMatterDetailsRequest = (data) => ({
  type: MATTER.FETCH_DETAILS.REQUEST,
  payload: data, // Data to be sent with the action
});

// Action creator for successful matter details retrieval
export const fetchMatterDetailsSuccess = (data) => ({
  type: MATTER.FETCH_DETAILS.SUCCESS,
  payload: data, // The data received from the successful request
});

// Action creator for matter details retrieval error
export const fetchMatterDetailsError = (error) => ({
  type: MATTER.FETCH_DETAILS.ERROR,
  payload: error, // Error information in case of failure
});
