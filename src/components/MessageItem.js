import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const MessageItem = ({
    id, message, username, isCorrectUser, isUpdated, dispatch,
    userId, updateMessage, handleUpdate, removeMessage}) => {

    const [updated, setUpdated] = useState('');

    // get right messageItem with it's value
    const handleChange =  e => {
        let id = e.target.getAttribute("data-key");

        setUpdated(message);
        handleUpdate(id);
    };

    const handleKeyDown = async e => {
        if(e.key === 'Enter') {
            await updateMessage(updated)(userId, id);
            await handleUpdate();
        }
    };

    const handleClickRemove = () => {
       dispatch(removeMessage(userId, id));
    }

    if(isCorrectUser && isUpdated === id) {
        return (
            <li className="list-item">
                <Link to='/'>@{username} &nbsp;</Link>
                <input
                    type="text"
                    value={updated}
                    onChange={e => setUpdated(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </li>
        )
    }
    return (
        <li className="list-item">
            <Link to='/'>@{username} &nbsp;</Link>
            <p>{message}</p>
            {isCorrectUser && (
                <div>
                    <button data-key={id} className="btn-message" onClick={handleChange}>edit</button>
                    <button className="btn-message" onClick={handleClickRemove}>delete</button>
                </div>
            )}
        </li>
    )
}

export default MessageItem;