import {
  MATTER,
  fetchMatterDetailsSuccess,
  fetchMatterDetailsError,
  fetchMatterListSuccess,
  fetchMatterListError,
} from './actions';

import { matterApi } from './api';
import { takeLatest, call, put, select } from 'redux-saga/effects';

/**
 * Saga function to fetch a list of matters.
 * @param {object} action - action with payload containing pageNumber and areaOfLaw.
 */
function* fetchMatterList(action) {
  try {
    const { pageNumber, areaOfLaw } = action.payload;
    const response = yield call(matterApi.fetchMatterList, {
      pageNumber,
      areaOfLaw,
    });
    yield put(fetchMatterListSuccess(response));
  } catch (error) {
    yield put(fetchMatterListError(error));
  }
}

/**
 * Saga watcher for fetching matter list.
 */
function* watchFetchMatterList() {
  yield takeLatest(MATTER.FETCH_LIST.REQUEST, fetchMatterList);
}

/**
 * Saga function to fetch matter details by ID.
 * @param {object} action - action with payload containing the matter ID.
 */
function* fetchMatterDetails(action) {
  try {
    const id = action.payload;
    const detailsCache = yield select((state) => state.matter.detailsCache);
    if (!detailsCache[id]) {
      const response = yield call(matterApi.fetchMatterList, {
        id,
      });
      yield put(fetchMatterDetailsSuccess(response));
    } else {
      yield put(fetchMatterDetailsSuccess(detailsCache[id]));
    }
  } catch (error) {
    yield put(fetchMatterDetailsError(error));
  }
}

/**
 * Saga watcher for fetching matter details.
 */
function* watchFetchMatterDetails() {
  yield takeLatest(MATTER.FETCH_DETAILS.REQUEST, fetchMatterDetails);
}

const matterSagas = [watchFetchMatterList(), watchFetchMatterDetails()];

export default matterSagas;
