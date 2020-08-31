import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const AuthRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path={"/sign"} exact component={() => <></>} />
            <Route path={"/signup"} exact component={() => <></>} />
            <Route path={"*"} exact component={() => <></>} />
        </Switch>
    );
};
