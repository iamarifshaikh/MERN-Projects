import * as Action from '../Redux/ResultReducer';
import { postServerData } from '../Helper/Helper';

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result));
    } catch (error) {
        console.log(error);
    }
};

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error);
    }
}; 

export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if (result !== [] && !username) throw new Error("Could not get any result");
            await postServerData("https://whoknowmebetter.onrender.com/result", resultData, data => data);
        } catch (error) {
            console.log(error);
        }
    })();
};