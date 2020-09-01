import React from 'react';
import { useHistory } from 'react-router-dom';

import { IconTransfer, IconDeposit, IconPayment } from '../../../assets';
import { Button } from '../button/Button';

export const TransactionButtons: React.FC = () => {
    const history = useHistory();

    return (
        <div className="padding-m flex-content-center flex-row">
            <Button onClick={()=> history.push('/deposito')} className="display-flex padding-horizontal-g margin-left-xg margin-right-xg flex-items-center">
                <IconDeposit className="margin-right-s" width={36} />
                Deposito
            </Button>
            <Button onClick={()=> history.push('/transferencia')} className="display-flex padding-horizontal-g margin-left-xg margin-right-xg flex-items-center">
                <IconTransfer className="margin-right-s" width={30} />
                Transferência
            </Button>
            <Button onClick={()=> history.push('/pagamento')} className="display-flex padding-horizontal-g margin-left-xg margin-right-xg flex-items-center" >
                <IconPayment className="margin-right-s" width={30} />
                Pagamento
            </Button>
        </div>
    );
}
