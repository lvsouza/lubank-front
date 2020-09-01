import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header, Body } from '../shared/components';

export const AppRoutes: React.FC = () => {
    return (
        <div className="flex1 degrade flex-items-center">
            <Header />
            <Body>
                <Switch>
                    <Route path={"/home"} exact component={() => <></>} />
                    <Route path={"*"} component={() => <Redirect to='/home' />} />
                </Switch>
            </Body>
        </div>
    );
};
