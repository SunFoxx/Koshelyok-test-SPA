import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
    WASHERS_SELECT_CITY,
    fetchWashersList,
    washerFetchingFailed,
    saveWashersList,
} from '../actions';
import api from '../services/api';
import { composeBizResultJson } from '../transform/yandexFormatter';

function* fetchWashersListIfRequired(action) {
    try {
        const { city } = action.payload;
        yield put(fetchWashersList(city));
        const rawData = yield call(api.getListByCity, city);
        const resultJSON = composeBizResultJson(rawData);

        yield put(saveWashersList(resultJSON));
    } catch (e) {
        yield put(washerFetchingFailed());
    }
}

export default function* () {
    yield all([
        takeLatest(WASHERS_SELECT_CITY, fetchWashersListIfRequired),
    ]);
}
