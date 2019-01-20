import { all, put, takeEvery } from 'redux-saga/effects';
import {
    WASHERS_SELECT_CITY,
    fetchWashersList,
    washerFetchingFailed,
    saveWashersList,
} from '../actions';

function* fetchWashersListIfRequired(action) {
    try {
        const { city } = action.payload;
        yield put(fetchWashersList(city));

        const result = yield new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() >= 0.3 ? resolve() : reject();
            }, 250);
        });

        yield put(saveWashersList(result));
    } catch (e) {
        yield put(washerFetchingFailed());
    }
}

export default function* () {
    yield all([
        takeEvery(WASHERS_SELECT_CITY, fetchWashersListIfRequired),
    ]);
}
