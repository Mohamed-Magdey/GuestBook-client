import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../store/actions/auth';

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/signin');
    };
    render() {
        return (
            <header>
                <nav>
                    <div id="brand">GuestBook</div>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul>
                            <li>
                                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li>
                                <a onClick={this.logout} href="/signin">Log out</a>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <Link to="/signup">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Log in</Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, {logout})(Navbar));