import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';

const store = configureStore();

const GuestBook = () => (
    <Provider store={store}>
        <Router>
            <Navbar/>
        </Router>
    </Provider>
);

export default GuestBook;
