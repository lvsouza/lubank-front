import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path={"/home"} exact component={() => <></>} />
            <Route path={"*"} component={() => <Redirect to='/home' />} />
        </Switch>
    );
};
