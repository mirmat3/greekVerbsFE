// import { push } from 'connected-react-router';
import { put, select } from 'redux-saga/effects';

import { actions as errorActions } from '../reducers/errorCatcher';

export const getCurrentPath = state => state.router.location.pathname;
export const getPreviousLocation = state => state.myRouter.previousLocation;

export function* goErrorPage(args) {
  if (args) {
    const { payload } = args;
    const { handlingCode, sagaName } = payload;
    const currentPath = yield select(getCurrentPath);

    // Normalized errors
    if ((handlingCode && handlingCode < 0) || (payload && payload.error)) {
      let myCustomError = null;
      // Collect other errors not yet controlled
      if (payload.error && payload.error.response) {
        myCustomError = {
          ...payload.error.response.data,
          sagaName,
        };
      }
      yield put(errorActions.storeError({ handlingCode, currentPath, myCustomError }));
    }
    if (payload && payload.response) {
      const { error } = payload.response.data;
      yield put(errorActions.storeError({ error, currentPath }));
    }
  }
}
