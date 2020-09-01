import React from 'react';

import ImgLubankLogo from './lubank-logo.png';


export const LubankLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Logo Lubank" src={ImgLubankLogo} {...props} />;
