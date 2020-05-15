import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from "../store/actions/errors";
import MessageList from './MessageList';
import withAuth from "../hocs/withAuth";

const Main = props => {
    const {authUser, errors, removeError} = props;
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
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser}
                                buttonText="Sign up!"
                                heading="Join To GuestBook."
                                {...props}
                            />
                        );
                    }}
                />
            </Switch>
        </section>
    )
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));