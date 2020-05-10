import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Main = () => {
    return (
        <section>
            <Switch>
                <Redirect exact from="/" to="signin" />
            </Switch>
        </section>
    )
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

export default withRouter(connect(mapStateToProps, null)(Main));