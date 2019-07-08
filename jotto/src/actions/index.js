import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export const guessWord = guessedWord => (dispatch, getState) => {
    const { secretWord } = getState();
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
        type: actionTypes.GUESS_WORD,
        payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
        dispatch({ type: actionTypes.CORRECT_GUESS })
    }
};

export const getSecretWord = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3030');
        if (!response.status) {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: 'TIMEOUT',
            });
        } else if (!response.data) {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: 'EMPTY',
            });
        } else if (response.status === 200) {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: response.data,
            });
        }
    }
    catch (err) {
        dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: 'ERROR',
        });
    }
}