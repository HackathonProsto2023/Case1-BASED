import React from 'react';

interface props {
    children: React.ReactNode
}

const Layout = ({children}: props) => {
    return (
        <div>
            Layout
            {children}
        </div>
    );
};

export default Layout;