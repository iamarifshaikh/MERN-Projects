import * as Action from '../Redux/ResultReducer';

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result));
    } catch (error) {
        console.log(error);
    }
}