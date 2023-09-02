import {
    takeLatest,
    call,
    put,
} from 'redux-saga/effects';
import {
    MATTER,
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
        yield put(fetchMatterListSuccess(response.data));
    } catch (error) {
        yield put(fetchMatterListError(error));
    }
}

function* watchFetchMatterList() {
    yield takeLatest(MATTER.FETCH_LIST.REQUEST, fetchMatterList);
}


const matterSagas = [watchFetchMatterList()];

export default matterSagas;