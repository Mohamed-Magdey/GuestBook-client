import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMessages, addNewMessage, updateMessage, removeMessage} from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

const MessageList = ({history}) => {
    const [message, setMessage] = useState("");
    const [isUpdated, setIsUpdated] = useState("");

    const currentUserId = useSelector(state => state.currentUser.user.id);
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages());

    }, [history.location.key])

    const handleNewMessage = e => {
        e.preventDefault();
        
        dispatch(addNewMessage(message));

        setMessage("");
        history.push('/');
    };

    const handleUpdate = (id) => {
        let mTarget = messages.filter(m => m._id === id);

        if (mTarget.length !== 0) {
            mTarget = mTarget[0]._id;
            setIsUpdated(mTarget)

        } else {
            setIsUpdated("");
            history.push('/');
        }
    };

    let messageList = messages.map(m=> (
        <MessageItem
            key={m._id}
            id={m._id}
            userId={m.user._id}
            message={m.message}
            username={m.user.username}
            removeMessage={removeMessage}
            isCorrectUser={currentUserId === m.user._id}
            handleUpdate={handleUpdate}
            isUpdated={isUpdated}
            updateMessage={updateMessage}
            dispatch={dispatch}
        />
    ));

    return (
        <div className="message-list">
            <form className="container message-form" onSubmit={handleNewMessage}>
                <input
                    placeholder="Write your message"
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value) }
                />
                <button type="submit" className="btn-new">
                    Add my message!
                </button>
            </form>
            <ul id="messages">
                {messageList}
            </ul>
        </div>
    );
}

export default MessageList;