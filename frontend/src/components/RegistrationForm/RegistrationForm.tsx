import React from 'react';
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const RegistrationForm = () => {
    return (
        <div className={'main'}>
            <Label text={'Регистрация'}/>
            <div className={'input__block'}>
                <h3>Имя:</h3>
                <Input/>
            </div>
            <div className={'flex'}>
                <input type="radio" name="options" value={'APPLICANT'} /> Соискатель
                <input type="radio" name="options" value={'RECRUITER'} /> Рекрутер
            </div>
            <Button text={'Зарегистрироваться'}/>
        </div>
    );
};

export default RegistrationForm;