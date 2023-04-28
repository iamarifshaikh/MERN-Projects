import { combineReducers, configureStore } from "@reduxjs/toolkit";

import QuestionReducer from './QuestionReducer';
import  ResultReducer from '../Redux/ResultReducer';

const mainReducer = combineReducers({
    questions: QuestionReducer,
    result: ResultReducer
})

export default configureStore({ reducer: mainReducer });