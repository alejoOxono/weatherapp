import { applyMiddleware, createStore, compose } from "redux";
import rootReduce from "../reduce/rootReduce";
import thunk from "redux-thunk";


const store = createStore(rootReduce, compose(
  applyMiddleware(thunk)
));

export default store
