import React from 'react';
import './Button.css';

interface props {
    text: string;
    handler?: () => void;
}

const Button = ({text, handler}: props) => {
    return (
        <div onClick={handler} className={'button'}>
            {text}
        </div>
    );
};

export default Button;