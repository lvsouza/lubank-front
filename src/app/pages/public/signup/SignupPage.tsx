import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Link } from '../../../shared/components';
import { LubankLogo } from '../../../assets';
import './SignupPage.css';

export const SignupPage: React.FC = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [passwordAgain, setPaswordAgain] = useState('');

    const handlerSignup = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }, []);

    return (
        <div className="flex1 degrade-signup flex-content-center flex-items-center">
            <div className="shadow-soft padding-g background-secondary border-radius-soft flex-items-center">
                <LubankLogo height={80} width={80} />
                <br />
                <p>Bem-vindo,</p>
                <b>crie sua conta!</b>
                <br />
                <form className="display-flex flex-column flex-content-center" onSubmit={handlerSignup}>
                    <Input type="text" placeholder="Seu nome completo" value={name} onChange={e => setName(e.currentTarget.value)} required />
                    <br />
                    <Input type="email" placeholder="Seu email" value={email} onChange={e => setEmail(e.currentTarget.value)} required />
                    <br />
                    <Input type="password" placeholder="Nova senha" value={password} onChange={e => setPasword(e.currentTarget.value)} required />
                    <br />
                    <Input type="password" placeholder="Digite a senha novamente" value={passwordAgain} onChange={e => setPaswordAgain(e.currentTarget.value)} required />
                    <br />
                    <Button className="background-primary">Cadastrar</Button>
                    <br />
                    <Link onClick={() => history.push('/sign')}>Já tenho uma conta</Link>
                </form>
            </div>
        </div>
    );
}
