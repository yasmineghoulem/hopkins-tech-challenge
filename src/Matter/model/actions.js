// Matter Actions
export const MATTER = {
  FETCH_LIST: {
    REQUEST: 'MATTER.FETCH_LIST.REQUEST',
    SUCCESS: 'MATTER.FETCH_LIST.SUCCESS',
    ERROR: 'MATTER.FETCH_LIST.ERROR',
  },
};

export const fetchMatterListRequest = (data) => ({
  type: MATTER.FETCH_LIST.REQUEST,
  payload: data,
});

export const fetchMatterListSuccess = (data) => ({
  type: MATTER.FETCH_LIST.SUCCESS,
  payload: data,
});

export const fetchMatterListError = (error) => ({
  type: MATTER.FETCH_LIST.ERROR,
  payload: error,
});

export const setAreaOfLowFilter = (filterValue) => ({
  type: 'SET_AREA_OF_LOW_FILTER',
  payload: filterValue,
});

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: 'SET_CURRENT_PAGE_NUMBER',
  payload: currentPageNumber,
});