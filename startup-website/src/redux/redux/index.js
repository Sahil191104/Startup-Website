import { combineReducers } from "redux";
import { counterreducer } from "./counter.reducer.js";
import { employeereducer } from "./employee.reducer.js";

export const routerReducer = combineReducers ({
    couter: counterreducer,
    employee: employeereducer
})