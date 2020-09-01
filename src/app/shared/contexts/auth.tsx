import React, { createContext, useState, useCallback, useEffect } from 'react';

import { Api, LocalStorageService } from './../services';

interface IAuthContextData {
    isLogged: boolean;
    isLoading: boolean;
    logout(): Promise<void>;
    login(email: string, password: string): Promise<boolean>;
    signup(name: string, email: string, password: string): Promise<boolean>;
    user: {
        name: string;
        email: string;
        agency: string;
        account_number: string;
    }
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    useEffect(() => {
        const accessToken = LocalStorageService.getAuthToken();
        const userData = LocalStorageService.getUserData();
        setAuthData(oldState => ({
            ...oldState,
            isLogged: accessToken ? true : false,
            user: userData,
        }));
    }, []);

    const handleSignup = useCallback(async (name: string, email: string, password: string) => {
        setAuthData(oldState => ({
            ...oldState,
            isLoading: true,
        }));

        try {
            Api(false).post('/signup', {}, {
                headers: {
                    email,
                    password,
                    name,
                }
            })
                .then(({ data: { data } }) => {
                    LocalStorageService.setAuthToken(data.accessToken);
                    LocalStorageService.setUserData(data.user);
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                        user: data.user,
                        isLogged: true,
                    }));
                    return true;
                })
                .catch((e) => {
                    console.log(e.message)
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                    }));
                    return false;
                });
        } catch (error) {
            console.log(error.message)
            setAuthData(oldState => ({ ...oldState, isLoading: false }));
            return false;
        }
        return true;
    }, []);

    const handleLogin = useCallback(async (email: string, password: string) => {
        setAuthData(oldState => ({
            ...oldState,
            isLoading: true,
        }));

        try {
            Api(false).get('/sign', {
                headers: {
                    email,
                    password
                }
            })
                .then(({ data: { data } }) => {
                    LocalStorageService.setAuthToken(data.accessToken);
                    LocalStorageService.setUserData(data.user);
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                        user: data.user,
                        isLogged: true,
                    }));
                    return true;
                })
                .catch((_) => {
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                    }));
                    return false;
                });
        } catch (error) {
            console.log(error)
            setAuthData(oldState => ({ ...oldState, isLoading: false }));
            return false;
        }
        return true;
    }, []);

    const handleLogout = useCallback(async () => {

        if (!window.confirm('Realmente deseja encerrar o login?')) return;

        LocalStorageService.removeAuthToken();
        LocalStorageService.removeUserData();

        setAuthData(oldState => ({
            ...oldState,
            isLogged: false,
            user: { email: '', name: '', account_number: '', agency: '' }
        }))
    }, []);

    const [authData, setAuthData] = useState<IAuthContextData>({
        isLogged: false,
        isLoading: false,
        login: handleLogin,
        logout: handleLogout,
        signup: handleSignup,
        user: { name: '', email: '', account_number: '', agency: '' }
    });

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}
