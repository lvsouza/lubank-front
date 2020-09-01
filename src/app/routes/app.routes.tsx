import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header, Body, UserBalance, TransactionButtons } from '../shared/components';
import { PaymentPage, DepositPage, TransferPage, HistoryPage } from '../pages';

export const AppRoutes: React.FC = () => {
    return (
        <div className="flex1 degrade flex-items-center">
            <Header />
            <Body>
                <UserBalance />
                <TransactionButtons />
                <Switch>
                    <Route path={"/pagina-inicial"} exact component={() => <></>} />
                    <Route path={"/transferencia"} exact component={TransferPage} />
                    <Route path={"/historico"} exact component={HistoryPage} />
                    <Route path={"/pagamento"} exact component={PaymentPage} />
                    <Route path={"/deposito"} exact component={DepositPage} />
                    <Route path={"*"} component={() => <Redirect to='/pagina-inicial' />} />
                </Switch>
            </Body>
        </div>
    );
};
