import React from 'react';

import { LubankLogoName } from '../../../assets';
import { UserInfo } from '../user-info/UserInfo';

export const Header: React.FC = () => {

    return (
        <>
            <div className="background-primary padding-m flex-items-center">
                <div style={{ height: 25 }} className="full-width flex-row flex-space-between flex-items-center" />
            </div>
            <div className="background-primary padding-m flex-items-center fixed full-width">
                <div style={{ maxWidth: 720 }} className="full-width flex-row flex-space-between flex-items-center">
                    <LubankLogoName width={121} height={25} />
                    <UserInfo />
                </div>
            </div>
        </>
    );
}