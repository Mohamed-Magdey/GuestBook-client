import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';

// action creator for messages
export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const remove = id => ({
    type: REMOVE_MESSAGE,
    id
});

export const fetchMessages = () => {
    return dispatch => {
        return apiCall("get", '/api/messages')
            .then(res =>
                dispatch(loadMessages(res))
            )
            .catch(err => dispatch(addError(err.message)))
    }
};

export const addNewMessage = message => (dispatch, getState) => {
    let {currentUser} = getState();
    const userId = currentUser.user.id;
    return apiCall("post", `/api/users/${userId}/messages`, {message})
        .then(() => {})
        .catch(err => addError(err.message));
};

export const removeMessage = (userId, messageId) => {
    return dispatch => {
        return apiCall("delete", `/api/users/${userId}/messages/${messageId}`)
            .then(() => dispatch(remove(messageId)))
            .catch(err => dispatch(addError(err.message)));
    }
};