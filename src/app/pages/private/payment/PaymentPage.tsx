import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Section, Input, Button } from '../../../shared/components';

export const PaymentPage: React.FC = () => {
    const history = useHistory();

    const [billetNumber, setBilletNumber] = useState('');

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`/pagamento/${billetNumber}`)
    }, [billetNumber, history]);

    return (
        <div className="padding-m">
            <Section title="Pagamento">
                <form onSubmit={handleSubmit}>
                    <label className="margin-bottom-xs opacity-7" htmlFor="bars-code">Código de barras do boleto</label>
                    <div className="flex-row">
                        <Input id="bars-code" type="number" value={billetNumber} onChange={e => setBilletNumber(e.currentTarget.value)} className="border-thin-gray" placeholder="Ex: 00000000000000" required />
                        <Button className="background-primary margin-left-g padding-horizontal-xg">Continuar</Button>
                    </div>
                </form>
            </Section>
        </div>
    );
}
