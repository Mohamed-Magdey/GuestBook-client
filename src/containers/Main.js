import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const Main = () => {
    return (
        <section>
            <Switch>
                <Redirect exact from="/" to="signin" />
            </Switch>
        </section>
    )
};

export default Main;