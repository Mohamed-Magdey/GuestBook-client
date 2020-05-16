import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: this.props.message
        }
    }

    // get right messageItem
    handleChange = e => {
        let id = e.target.getAttribute("data-key");
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
                    <input
                        type="text"
                        value={updated}
                        onChange={e => this.setState({updated: e.target.value})}
                        onKeyDown={this.handleKeyDown}
                    />
            )
        }
        return (
            <li className="list-item">
                <Link to='/' style={{fontWeight: 'bold'}}>@{username} &nbsp;</Link>
                <p>{message}</p>
                {isCorrectUser && (
                    <div>
                        <button data-key={id} className="btn-delete" onClick={this.handleChange}>edit</button>
                        <button className="btn-delete" onClick={removeMessage}>delete</button>
                    </div>
                )}
            </li>
        )
    }
}

export default MessageItem;
