/**
 * Combine all reducers in this file and export the combined reducers.
 */

 import { combineReducers } from 'redux';
 import { connectRouter } from 'connected-react-router';
 import { createBrowserHistory } from 'history';

 
 // REDUCERS
 import articulosReducers from './articulos';
 import verbosReducer from './verbos';

 import ErrorCatcherReducer from './errorCatcher';
 import myRouterReducer from './myRouter';
 

 const history = createBrowserHistory();
 export default function createReducer(injectedReducers = {}) {
   const rootReducer = combineReducers({
     articulos: articulosReducers,
     verbos: verbosReducer,
     errorCatcher: ErrorCatcherReducer,
     myRouter: myRouterReducer,
     router: connectRouter(history),
     ...injectedReducers,
   });
 
   return rootReducer;
 }
 