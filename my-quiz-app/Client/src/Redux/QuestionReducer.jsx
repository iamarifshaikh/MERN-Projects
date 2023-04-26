import { createSlice } from "@reduxjs/toolkit";

export const QuestionReducer = createSlice({
    name: "questions",
    initialState: {
        queue: [],
        answers: [],
        trace: 0,
    },
    reducers: {
        startAction: (state, action) => {
            let { question, answers } = action.payload;
            return {
                ...state,
                queue: question,
                answers
            };
        },
        moveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            };
        },
        movePreviousAction: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            };
        },
        resetAllAction: () => {
            return {
                queue: [],
                answers: [],
                trace: 0,
            };
        }
    }
})

export const { startAction, moveNextAction, movePreviousAction, resetAllAction } = QuestionReducer.actions;

export default QuestionReducer.reducer;