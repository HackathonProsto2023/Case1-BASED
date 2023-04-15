import React from 'react';
import './LoginForm.css';
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const LoginForm = () => {
    return (
        <div className={'main'}>
            <Label text={'Вход'}/>
            <div className={'flex'}>
                <h3>Имя:</h3>
                <Input/>
            </div>
            <div className={'flex_column'}>
                <div>
                    <input type="radio" name="options" value={'APPLICANT'} defaultChecked={true}/> Соискатель
                </div>
                <div>
                    <input type="radio" name="options" value={'RECRUITER'} /> Рекрутер
                </div>
                <div>
                    <input type="radio" name="options" value={'RECRUITER'} /> Организация
                </div>
            </div>
            <Button text={'Войти'}/>
        </div>
    );
};

export default LoginForm;