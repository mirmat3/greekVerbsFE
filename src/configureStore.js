/**
 * Create the store with dynamic reducers
 */

 import { createStore, applyMiddleware, compose } from 'redux';
 import { routerMiddleware } from 'connected-react-router';
 import createSagaMiddleware from 'redux-saga';
 
 import createReducer from './reducers/index';
 import rootSaga from './sagas/index';
 
 import { savePersistedState } from './utils/clientSideStorage';
 import throttle from 'lodash/throttle';
 
 export default function configureStore(initialState = initialState || {}, history) {
   let composeEnhancers = compose;
   const reduxSagaMonitorOptions = {};
 
   // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
   /* istanbul ignore next */
     /* eslint-disable no-underscore-dangle */
     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
       composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
 
     // NOTE: Uncomment the code below in case you want to see the trace of action calls inside REDUX DEV TOOLS
     /* eslint-disable no-underscore-dangle */
     // if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
     //   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     //     trace: true,
     //     traceLimit: 25,
     //   });
 
     // NOTE: Uncomment the code below to restore support for Redux Saga
     // Dev Tools once it supports redux-saga version 1.x.x
     // if (window.__SAGA_MONITOR_EXTENSION__)
     //   reduxSagaMonitorOptions = {
     //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
     //   };
     /* eslint-enable */
   
 
   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
 
   // Create the store with two middlewares
   // 1. sagaMiddleware: Makes redux-sagas work
   // 2. routerMiddleware: Syncs the location/URL path to the state
   const middlewares = [sagaMiddleware, routerMiddleware(history)];
 
   const enhancers = [applyMiddleware(...middlewares)];
 
   const store = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers),
   );
 
   // Extensions
   store.runSaga = sagaMiddleware.run(rootSaga);
   store.injectedReducers = {}; // Reducer registry
   store.injectedSagas = {}; // Saga registry
 
   // Persist Store subscriber
   store.subscribe(
     throttle(() => {
       savePersistedState({
         articulos: store.getState().articulos,
       });
     }),
     1000,
   );
 
   // Make reducers hot reloadable, see http://mxs.is/googmo
   /* istanbul ignore next */
   if (module.hot) {
     module.hot.accept('./reducers/index', () => {
       store.replaceReducer(createReducer(store.injectedReducers));
     });
   }
 
   return store;
 }
 