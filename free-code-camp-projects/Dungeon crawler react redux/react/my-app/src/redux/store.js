import { createStore } from "redux"
import initializingGrid from './reducers'

const store = createStore(initializingGrid);
console.log("this is may state", store.getState())
export default store;