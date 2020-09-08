import { all } from 'redux-saga/effects';

import userSettingsSaga from './userSettingsSaga';

export default function* rootSaga() {
    return yield all([
        userSettingsSaga,
    ]);
}
