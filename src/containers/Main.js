import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from "../store/actions/errors";
import MessageList from './MessageList';
import withAuth from "../hocs/withAuth";

const Main = () => {
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch();

    return (
        <section>
            <Switch>
                <Route exact path="/" component={withAuth(MessageList)} />
                <Route
                    exact
                    path="/signin"
                    render={props => {
                        return (
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser}
                                buttonText="Log in"
                                heading="Welcome Back."
                                dispatch={dispatch}
                                {...props} />
                        );
                    }}
                />
                <Route
                    exact
                    path="/signup"
                    render={props => {
                        return (
                            <AuthForm
                                signUp
                                removeError={dispatch(removeError)}
                                errors={errors}
                                onAuth={authUser}
                                buttonText="Sign up!"
                                heading="Join To GuestBook."
                                dispatch={dispatch}
                                {...props}
                            />
                        );
                    }}
                />
            </Switch>
        </section>
    )
};

export default Main;