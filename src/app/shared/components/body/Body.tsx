import React from 'react';

export const Body: React.FC = ({ children }) => {

    return (
        <body style={{ maxWidth: 720, height: 'auto' }} className="full-width padding-g background-secondary shadow-soft">
            {children}
        </body>
    );
}
