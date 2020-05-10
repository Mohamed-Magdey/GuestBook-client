import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_MESSAGES} from '../actionTypes';

// action creator for messages
export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const fetchMessages = () => {
    return dispatch => {
        return apiCall("get", '/api/messages')
            .then(res =>
                dispatch(loadMessages(res))
            )
            .catch(err => dispatch(addError(err.message)))
    }
}