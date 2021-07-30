import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../store/actions/auth';

const Navbar = () => {
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    const logOut = e => {
        e.preventDefault();
        dispatch(logout());
    };
    
    return (
        <header>
            <nav>
                <div id="brand">GuestBook</div>
                {currentUser.isAuthenticated ? (
                    <ul>
                        <li>
                            {/*<Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>*/}
                            <Link to='/'>{currentUser.user.username}</Link>
                        </li>
                        <li>
                            <Link onClick={logOut} to="/signin">Log out</Link>
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


export default Navbar;