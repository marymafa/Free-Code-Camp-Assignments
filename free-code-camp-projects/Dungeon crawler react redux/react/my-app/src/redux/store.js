import { createStore } from "redux"
import initializingGrid from './reducers'

const store = createStore(initializingGrid);

export default store;