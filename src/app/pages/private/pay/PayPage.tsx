import React, { useCallback, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Section, Button } from '../../../shared/components';
import { useAuth } from '../../../shared/hooks';
import { Api } from '../../../shared/services';

export const PayPage: React.FC = () => {
    const { billet } = useParams();
    const history = useHistory();
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(false);

    const [state, setState] = useState({
        favored: '',
        value: '',
    });

    useEffect(() => {
        setIsLoading(true);

        Api()
            .post('billet-info', { code: billet })
            .then(({ data: { data } }) => {
                setIsLoading(false);

                setState({
                    favored: data.favored,
                    value: data.value,
                })
            })
            .catch(e => {
                alert('Erro ao consultar as infomações do boleto.')
                history.goBack();
            });
    }, [billet, history]);

    const handlePayBillet = useCallback(() => {
        if (isLoading) return;

        setIsLoading(true);

        Api()
            .post('pay-billet', { code: billet })
            .then(() => {
                alert('Seu boleto foi pago com sucesso. Obrigado!')
                history.goBack();
            })
            .catch(e => {
                setIsLoading(false);
                alert('Erro ao pagar o boleto.')
            });
    }, [billet, history, isLoading]);

    return (
        <div className="padding-m">
            <Section title="Pagamento">
                <div>
                    <p className="margin-bottom-xs opacity-7">Código de barras do boleto</p>
                    {billet}
                </div>
                <div className="flex-row flex-space-between">
                    <div>
                        <br />
                        <p className="margin-bottom-xs opacity-7">Pagador</p>
                        {user.name}
                    </div>
                    <div>
                        <br />
                        <p className="margin-bottom-xs opacity-7">Conta</p>
                        {user.account_number}
                    </div>
                    <div>
                        <br />
                        <p className="margin-bottom-xs opacity-7">Agência</p>
                        {user.agency}
                    </div>
                </div>
                <div>
                    <br />
                    <p className="margin-bottom-xs opacity-7">Favorecido</p>
                    {state.favored || 'Carregando...'}
                </div>
                <div>
                    <br />
                    <p className="margin-bottom-xs opacity-7">Valor do boleto</p>
                    <b>R$: {state.value ? Number(state.value).toFixed(2) : 'Carregando...'}</b>
                </div>
                <br />
                <br />
                <div className="flex-row flex-content-center">
                    <Button className="background-white padding-horizontal-xg" onClick={history.goBack} disabled={isLoading}>Cancelar</Button>
                    <Button className="background-primary padding-horizontal-xg margin-left-m" onClick={handlePayBillet} disabled={isLoading}>Pagar</Button>
                </div>
            </Section>
        </div>
    );
}
