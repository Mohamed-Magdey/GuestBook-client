import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store'

const store = configureStore();

const GuestBook = () => (
    <Provider store={store}>
        <div/>
    </Provider>
);

export default GuestBook;
