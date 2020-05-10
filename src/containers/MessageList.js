import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages} from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }
    render() {
        const {messages} = this.props;
        let messageList = messages.map(m=> (
            <MessageItem
                key={m._id}
                text={m.text}
                username={m.user.username}
            />
        ));
        return messageList;
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

export default connect(mapStateToProps, {fetchMessages})(MessageList);