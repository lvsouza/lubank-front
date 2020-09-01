import React from 'react';

import ImgLubankLogoName from './lubank-logo-name.png';
import ImgLubankLogo from './lubank-logo.png';
import ImgIconExit from './exit-icon.png';


export const LubankLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Logo Lubank" src={ImgLubankLogo} {...props} />;

export const LubankLogoName: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Logo nome Lubank" src={ImgLubankLogoName} {...props} />;

export const IconExit: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Sair do app" src={ImgIconExit} {...props} />;
