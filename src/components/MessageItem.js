import React from 'react';
import {Link} from 'react-router-dom';;

const MessageItem = ({text, username}) => (
    <div>
        <Link to='/'>@{username} &nbsp;</Link>
        <p>{text}</p>
    </div>
)

export default MessageItem;
