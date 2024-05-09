import { call, put, takeLatest } from 'redux-saga/effects';
import { getAPI } from '../helpers/API'

function* getAccountList(): Generator<any> {
  try {
    const response: any = yield call(() =>
        getAPI('accounts')
    );
    if (response.status === 200) {
      const { data } = response;
      console.log('data', data);
      
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

function* getAccountListSaga() {
  yield takeLatest('account/getAccountList', getAccountList);
}

export default getAccountListSaga;
