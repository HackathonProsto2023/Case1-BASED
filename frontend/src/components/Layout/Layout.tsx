import React from 'react';
import Header from "../Header/Header";

interface props {
    children: React.ReactNode
}

const Layout = ({children}: props) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;