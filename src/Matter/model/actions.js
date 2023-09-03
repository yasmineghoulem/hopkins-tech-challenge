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
  FELTERS: {
    AREAOFLAW: 'SET_AREA_OF_LOW_FILTER',
    PAGENUMBER: 'SET_CURRENT_PAGE_NUMBER',
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

export const setAreaOfLawFilter = (filterValue) => ({
  type: MATTER.FELTERS.AREAOFLAW,
  payload: filterValue,
});

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: MATTER.FELTERS.PAGENUMBER,
  payload: currentPageNumber,
});

export const fetchMatterDetailsRequest = (data) => ({
  type: MATTER.FETCH_DETAILS.REQUEST,
  payload: data,
});

export const fetchMatterDetailsSuccess = (data) => ({
  type: MATTER.FETCH_DETAILS.SUCCESS,
  payload: data,
});

export const fetchMatterDetailsError = (error) => ({
  type: MATTER.FETCH_DETAILS.ERROR,
  payload: error,
});