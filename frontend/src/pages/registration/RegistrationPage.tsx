import React from 'react';
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;