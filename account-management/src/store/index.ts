import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../redux/account';
import productReducer from '../redux/product';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './rootSagas'
const sagaMiddleware: any  = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    account: accountReducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSagas);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch