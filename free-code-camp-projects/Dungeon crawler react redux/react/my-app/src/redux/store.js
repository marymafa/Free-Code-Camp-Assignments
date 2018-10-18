import { createStore } from "redux"
import initializingGrid from './reducers'

const store = createStore(initializingGrid,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;