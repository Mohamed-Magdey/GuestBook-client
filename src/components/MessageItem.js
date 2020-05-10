import React from 'react';
import {Link} from 'react-router-dom';;

const MessageItem = ({message, username}) => (
    <div>
        <Link to='/'>@{username} &nbsp;</Link>
        <p>{message}</p>
    </div>
)

export default MessageItem;
