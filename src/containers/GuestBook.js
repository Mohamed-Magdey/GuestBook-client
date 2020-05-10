import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';

const store = configureStore();

const GuestBook = () => (
    <Provider store={store}>
        <Router>
            <Navbar/>
            <Main />
        </Router>
    </Provider>
);

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default GuestBook;
