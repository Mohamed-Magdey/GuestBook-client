import React from 'react';
import {Link} from 'react-router-dom';;

const MessageItem = ({message, username}) => (
    <li className="list-item">
        <Link to='/' style={{fontWeight: 'bold'}}>@{username} &nbsp;</Link>
        <p style={{marginTop: '5px'}}>{message}</p>
    </li>
)

export default MessageItem;
