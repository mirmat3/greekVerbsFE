import { call, put, select } from "redux-saga/effects";
import axios from "axios";

import { actions as articulosActions } from "../reducers/articulos";

// import { sagaNames } from 'sagas/sagaNames';

// const getArticulosReduxState = state => (state.articulos ? state.articulos.getRolesSuccess : null);

function getArticulos() {
  const url = `http://localhost:5000/api/v1/articulos/`;
  const response = axios({
    method: "get",
    url,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export function* getArticulosWorker() {
  try {
    let response = null;
    response = yield call(getArticulos);

    if (response && response.data) {
      yield put(articulosActions.successGetArticulos(response.data));
    }
  } catch (error) {
    yield put(articulosActions.errorGetArticulos(error.response));
  }
}
