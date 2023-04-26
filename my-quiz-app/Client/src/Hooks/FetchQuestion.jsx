import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data, { answers } from '../Database/data';

import * as Action from '../Redux/QuestionReducer';

/** Fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {

    const dispatch = useDispatch();
    
    const [getData, setGetData] = useState({ Loading: false, apiData: [], serverError: null });
    
    useEffect(() => {
        setGetData(prev => ({ ...prev, Loading: true }));
        
        (async () => {
            try {
                let question = await data;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, Loading: false }));
                    setGetData(prev => ({ ...prev, apiData: { question, answers } }));
                        
                    dispatch(Action.startAction({ question, answers }));
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