import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";

import reducer from "./reducers";
import rootSaga from "./sagas";

axios.defaults.baseURL = "https://reqres.in/api";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
