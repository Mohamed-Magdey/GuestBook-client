import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from "../store/actions/errors";

const Main = props => {
    const {authUser, errors, removeError} = props;
    return (
        <section>
            <Switch>
                <Redirect exact from="/" to="signup" />
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