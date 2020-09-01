import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Link } from '../../../shared/components';
import { useAuth } from '../../../shared/hooks';
import { LubankLogo } from '../../../assets';
import './LoginPage.css';

export const LoginPage: React.FC = () => {
    const history = useHistory();
    const { login, isLoading } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const handlerLogin = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await login(email, password);

    }, [email, password, login]);

    return (
        <div className="flex1 degrade-login flex-content-center flex-items-center">
            <div className="shadow-soft padding-g background-secondary border-radius-soft flex-items-center">
                <LubankLogo height={80} width={80} />
                <br />
                <p>Olá,</p>
                <b>entre na sua conta!</b>
                <br />
                <form className="display-flex flex-column flex-content-center" onSubmit={handlerLogin}>
                    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Input type="password" placeholder="Senha" value={password} onChange={e => setPasword(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Button className="background-primary" disabled={isLoading}>Entrar</Button>
                    <br />
                    <Link onClick={() => history.push('/signup')} disabled={isLoading}>Cadastrar-se</Link>
                </form>
            </div>
        </div>
    );
}
