import { all } from 'redux-saga/effects';
import { getAccountListSaga, createAccountSaga, getProductListListSaga } from '../sagas';

export default function* RootSagas() {
    yield all([
        getAccountListSaga(),
        createAccountSaga(),
        getProductListListSaga()
    ])}