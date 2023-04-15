import React from 'react';
import './Label.css';

interface props {
    text: string;
}

const Label = ({text}: props) => {
    return (
        <div className={'label'}>
            {text}
        </div>
    );
};

export default Label;