import React from 'react';
import './Input.css';

interface props {
    placeholder?: string;
    onChangeHandler?: () => void;
}

const Input = ({placeholder, onChangeHandler}: props) => {
    return (
        <input type="text" className={'input'} placeholder={placeholder} onChange={onChangeHandler}/>
    );
};

export default Input;