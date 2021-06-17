import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer";
import rootSaga from "./Saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['cartReducer']
};

const pReducer = persistReducer(persistConfig, rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(
  pReducer,
  applyMiddleware(sagaMiddleware, createLogger())
);

// then run the saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// render the application
