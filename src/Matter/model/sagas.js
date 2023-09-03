import {
    takeLatest,
    call,
    put,
    select,
} from 'redux-saga/effects';
import {
    MATTER,
    fetchMatterDetailsSuccess,
    fetchMatterDetailsError,
    fetchMatterListSuccess,
    fetchMatterListError,
} from './actions';

import {
    matterApi,
} from './api';

function* fetchMatterList(action) {
    try {
        const {
            pageNumber,
            areaOfLaw,
        } = action.payload;
        const response = yield call(matterApi.fetchMatterList, {
            pageNumber,
            areaOfLaw,
        });
        yield put(fetchMatterListSuccess(response));
    } catch (error) {
        yield put(fetchMatterListError(error));
    }
}

function* watchFetchMatterList() {
    yield takeLatest(MATTER.FETCH_LIST.REQUEST, fetchMatterList);
}

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

function* watchFetchMatterDetails() {
    yield takeLatest(MATTER.FETCH_DETAILS.REQUEST, fetchMatterDetails);
}

const matterSagas = [watchFetchMatterList(), watchFetchMatterDetails()];

export default matterSagas;