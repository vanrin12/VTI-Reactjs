import { all } from 'redux-saga/effects';
import getAccountListSaga from '../sagas';

export default function* RootSagas() {
    yield all([
        getAccountListSaga()
    ])}