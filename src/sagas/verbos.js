import { call, put, select } from "redux-saga/effects";
import axios from "axios";

import { actions as verbosActions } from "../reducers/verbos";

// import { sagaNames } from 'sagas/sagaNames';

// const getArticulosReduxState = state => (state.articulos ? state.articulos.getRolesSuccess : null);

function addVerbo(args) {
  const url = `http://localhost:3001/api/verbs `;
  const newVerb = args;
  const response = axios({
    method: "post",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: newVerb,
  });

  return response;
}

export function* addVerboWorker(args) {
  try {
    let response = null;
    response = yield call(addVerbo, args.verbData);

    if (response && response.data) {
      yield put(verbosActions.successAddVerbo(response.data));
    }
  } catch (error) {
    yield put(verbosActions.errorAddVerbo(error.response));
  }
}

function getVerbos() {
  const url = `http://localhost:3001/api/verbs `;

  const response = axios({
    method: "get",
    url,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}


export function* getVerbosWorker() {
  
  try {
    let response = null;
    response = yield call(getVerbos);
    if (response && response.data) {
      yield put(verbosActions.successGetVerbos(response.data));
    }
  } catch (error) {
    yield put(verbosActions.errorGetVerbos(error.response));
  }
}




function editVerbo(verbo) {
  const url = `http://localhost:3001/api/verbs/${verbo.id}`; // Suponiendo que el verbo tiene un ID único

  const response = axios({
    method: "put",
    url,
    data: verbo, // Enviamos el verbo editado en el cuerpo de la solicitud
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}


export function* editVerboWorker(args) {

 
  try {
    // Obtenemos el verbo desde la acción

    // Llamamos a la función `editVerbo` con el verbo editado
    const response = yield call(editVerbo, args?.verbo);
  
    // Si la respuesta es correcta y contiene los datos, despachamos el éxito
    if (response && response.data) {
      yield put(verbosActions.successEditVerbo(response.data)); // Suponiendo que `successEditVerbo` maneja el éxito
    }
  } catch (error) {
    // Si hay un error, despachamos la acción de error
    yield put(verbosActions.errorEditVerbo(error.response));
  }
}


function getAdverbios() {
  const url = `http://localhost:3001/api/adverbs `;

  const response = axios({
    method: "get",
    url,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}


export function* getAdverbiosWorker() {
  
  try {
    let response = null;
    response = yield call(getAdverbios);
    if (response && response.data) {
      yield put(verbosActions.successGetVerbos(response.data));
    }
  } catch (error) {
    yield put(verbosActions.errorGetVerbos(error.response));
  }
}

