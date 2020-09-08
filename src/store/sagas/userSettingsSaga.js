import { all, put, takeLatest } from 'redux-saga/effects';
import { Types } from '../ducks/userSettings';

/**
 * call = permite chamar uma promisse e espera ela ser resolvida
 * put = action do redux
 */
function* setDarkMode(action) {
    console.log('SetDarkMode');
}

export default all([
    takeLatest(Types.DARKMODE, setDarkMode)
]);