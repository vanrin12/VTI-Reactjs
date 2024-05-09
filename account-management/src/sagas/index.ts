import { call, put, takeLatest } from 'redux-saga/effects';
import { getAPI, postAPI } from '../helpers/API'

function* getAccountList(): Generator<any> {
  try {
    const response: any = yield call(() =>
        getAPI('accounts')
    );
    if (response.status === 200) {
      const { data } = response;
      yield put({ type: 'account/getAccountListSuccess', data });
    } else {
      const { msg } = response.data;
      yield put({
        type: 'account/getAccountListFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error

    yield put({ type: 'account/getAccountListFailed' });
  }
}




function* createAccount(action: any): Generator<any>  {
  try {
    const response: any = yield call(() =>
      postAPI('accounts',  action.payload)
    );
    if (response.status === 201) {
      const { data } = response;

      yield put({
        type: 'account/createAccountSuccess',
        data
      });
    } else {
      const { msg } = response.data;
      yield put({
        type: 'account/createAccountFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'account/createAccountFailed' });
  }
}

function* getProductListSuccess(): Generator<any> {
  try {
    const response: any = yield call(() =>
        getAPI('products')
    );
    if (response.status === 201) {
      const { data } = response;
      console.log('data', data);
      
      yield put({ type: 'product/getProductListSuccess', data });
    } else {
      const { msg } = response.data;
      yield put({
        type: 'product/getProductListFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error

    yield put({ type: 'product/getProductListFailed' });
  }
}


export function* createAccountSaga() {
  yield takeLatest('account/createAccount', createAccount);
}

export function* getAccountListSaga() {
  yield takeLatest('account/getAccountList', getAccountList);
}

export function* getProductListListSaga() {
  yield takeLatest('product/getProductList', getProductListSuccess);
}

