import React, {useState} from 'react';
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {emitKeypressEvents} from "readline";
import {authApi} from "../../API/authApi";
import user from "../../store/User";

const RegistrationForm = () => {
    const [login, setLogin] = useState<string>('');
    const [role, setRole] = useState<string>('applicant');

    const registration =  async (login: string, role: string) => {
        if (login) {
            const res = await authApi.registration(login, role);
            user.setUser(res.data.data);
        }
    }

    return (
        <div className={'main'}>
            <Label text={'Регистрация'}/>
            <div className={'input__block'}>
                <h3>Логин:</h3>
                <Input
                    value={login}
                    onChangeHandler={(event) => setLogin(event.target.value)}
                />
            </div>
            <div className={'flex'}>
                <input
                    type="radio"
                    name="options"
                    value={'applicant'}
                    defaultChecked={true}
                    onChange={(event) => setRole(event.target.value)}
                /> Соискатель
                <input
                    type="radio"
                    name="options"
                    value={'company'}
                    onChange={(event) => setRole(event.target.value)}
                /> Организация
            </div>
            <Button text={'Зарегистрироваться'} handler={() => registration(login, role)}/>
        </div>
    );
};

export default RegistrationForm;