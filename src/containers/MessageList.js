import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages, addNewMessage, updateMessage, removeMessage} from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            updatedMessage: "",
            isUpdated: ""
        };
    }

    componentDidMount() {
        this.props.fetchMessages();
    }

    handleNewMessage = async e => {
        e.preventDefault();
        await this.props.addNewMessage(this.state.message);
        this.setState({message: ""}, () => {
            this.props.history.push('/');
        });
    };

    handleUpdate = (id) => {
        let mTarget = this.props.messages.filter(m => m._id === id);

        if (mTarget.length !== 0) {
            mTarget = mTarget[0]._id;
            this.setState({isUpdated: mTarget});

        } else {
            this.setState({isUpdated:  ''}, () => {
                this.props.history.push('/');
            });
        }
    };

    render() {
        const {messages, removeMessage, currentUserId} = this.props;

        let messageList = messages.map(m=> (
            <MessageItem
                key={m._id}
                id={m._id}
                userId={m.user._id}
                message={m.message}
                username={m.user.username}
                removeMessage={removeMessage.bind(this, m.user._id, m._id)}
                isCorrectUser={currentUserId === m.user._id}
                handleUpdate={this.handleUpdate.bind(this)}
                isUpdated={this.state.isUpdated}
                updateMessage={updateMessage.bind(this)}
            />
        ));

        return (
            <div className="message-list">
                <form className="container message-form" onSubmit={this.handleNewMessage}>
                    <input
                        placeholder="Write your message"
                        type="text"
                        value={this.state.message}
                        onChange={e => this.setState({message: e.target.value})}
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
}

function mapStateToProps(state) {
    return {
        currentUserId: state.currentUser.user.id,
        messages: state.messages,
    };
}

export default connect(mapStateToProps, {fetchMessages, addNewMessage, updateMessage, removeMessage})(MessageList);