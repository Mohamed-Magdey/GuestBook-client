import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export function configureStore() {
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    );
}