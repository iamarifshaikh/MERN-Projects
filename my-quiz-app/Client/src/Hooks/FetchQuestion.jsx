import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../Helper/Helper";
import * as Action from '../Redux/QuestionReducer';

/** Fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {

    const dispatch = useDispatch();
    
    const [getData, setGetData] = useState({ Loading: false, apiData: [], serverError: null });
    
    useEffect(() => {
        setGetData(prev => ({ ...prev, Loading: true }));
        
        (async () => {
            try {
                const [{ questions, answers }] = await getServerData("http://localhost:3000/question", (data) => data);

                if (questions.length > 0) {
                    setGetData(prev => ({ ...prev, Loading: false }));
                    setGetData(prev => ({ ...prev, apiData:  questions }));
                        // 
                    dispatch(Action.startAction({ question: questions, answers }));
                } else {
                    throw new Error("There is no question available")
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, Loading: false }))
                setGetData(prev => ({ ...prev, serverError: error }))
            }
        })();
    }, [dispatch]);
    return [getData, setGetData];
};

export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error);
    }
};

export const MovePreviousQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePreviousAction());
    } catch (error) {
        console.log(error);
    }
};