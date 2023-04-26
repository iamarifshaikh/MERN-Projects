import { createSlice } from "@reduxjs/toolkit";

export const ResultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers:{
        setUserId:(state, action) => {
            state.userId = action.payload;
        },
        pushResultAction: (state, action) => {
            state.result.push(action.payload);
        },
        resetResultAction: () => {
            return {
                userId: null,
                result: []
            };
        }
    }
});

export const { setUserId, pushResultAction, resetResultAction } = ResultReducer.actions;

export default ResultReducer.reducer;