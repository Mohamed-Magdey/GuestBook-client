import React from 'react';
import {Link} from 'react-router-dom';;

const MessageItem = ({message, username, removeMessage, isCorrectUser}) => (
    <li className="list-item">
        <Link to='/' style={{fontWeight: 'bold'}}>@{username} &nbsp;</Link>
        <p>{message}</p>
        {isCorrectUser && (
            <button className="btn-delete" onClick={removeMessage}>delete</button>
        )}
    </li>
)

export default MessageItem;
