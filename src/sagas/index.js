// import { takeEvery, all, takeLatest, put } from 'redux-saga/effects';
import { all, takeLatest } from "redux-saga/effects";

/* ARTICULOS */
import { types as articulosTypes } from "../reducers/articulos";
import { types as verbosTypes } from "../reducers/verbos";

import * as articulosSagas from "./articulos";
import * as verbosSagas from "./verbos";

/* UTILS */
import { types as errorTypes } from "../reducers/errorCatcher";
import * as errorSagas from "./error";
export default function* rootSaga() {
  // console.log('export saga rootSaga');

  yield all([
    // CONFIGURATION SAGAS
    takeLatest(
      verbosTypes.ADD_VERBO_BEGINS,
      verbosSagas.addVerboWorker
    ),

    takeLatest(
      verbosTypes.GET_VERBOS_BEGINS,
      verbosSagas.getVerbosWorker
    ),
    takeLatest(
      verbosTypes.EDIT_VERBO_BEGINS,
      verbosSagas.editVerboWorker
    ),
    takeLatest(
      articulosTypes.GET_ARTICULOS_BEGINS,
      articulosSagas.getArticulosWorker
    ), 
    takeLatest(
      verbosTypes.GET_ADVERBIOS_BEGINS,
      verbosSagas.getAdverbiosWorker
    ),
  
    // UTILS -- ERROR
    takeLatest(errorTypes.SHOW_ERROR, errorSagas.goErrorPage),
  ]);
}
