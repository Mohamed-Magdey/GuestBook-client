import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: ''
        }
    }

    // get right messageItem with it's value
    handleChange =  e => {
        let id = e.target.getAttribute("data-key");
        this.setState((prevState, prevProps) => {
            return {updated: prevProps.message}
        })
        this.props.handleUpdate(id);
    };

    handleKeyDown = async e => {
        if(e.key === 'Enter') {
            await this.props.updateMessage(this.state.updated)(this.props.userId, this.props.id);
            await this.props.handleUpdate();
        }
    };

    render() {
        const {id, message, username, removeMessage, isCorrectUser, isUpdated} = this.props;
        const {updated} = this.state;

        if(isCorrectUser && isUpdated === id) {
            return (
                <li className="list-item">
                    <Link to='/' style={{fontWeight: 'bold'}}>@{username} &nbsp;</Link>
                    <input
                        type="text"
                        value={updated}
                        onChange={e => this.setState({updated: e.target.value})}
                        onKeyDown={this.handleKeyDown}
                    />
                </li>
            )
        }
        return (
            <li className="list-item">
                <Link to='/' style={{fontWeight: 'bold'}}>@{username} &nbsp;</Link>
                <p>{message}</p>
                {isCorrectUser && (
                    <div>
                        <button data-key={id} className="btn-message" onClick={this.handleChange}>edit</button>
                        <button className="btn-message" onClick={removeMessage}>delete</button>
                    </div>
                )}
            </li>
        )
    }
}

export default MessageItem;
