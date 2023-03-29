import rootReducer from "../src/reducers/rootReducer";
import { compose, legacy_createStore as createStore } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers());
