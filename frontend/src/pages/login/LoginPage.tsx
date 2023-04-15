import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div>
                <LoginForm />
                <div style={{margin: '10px 0 0 0'}}>
                    Нет профиля? <Link to={'/registration'}>Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;