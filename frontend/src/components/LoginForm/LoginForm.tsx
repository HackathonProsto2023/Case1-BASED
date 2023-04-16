import React, {useState} from 'react';
import './LoginForm.css';
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {authApi} from "../../API/authApi";
import user from "../../store/User";

const LoginForm = () => {
    const [login, setLogin] = useState<string>('');
    const [role, setRole] = useState<string>('applicant');

    const loginHandler =  async (login: string, role: string) => {
        if (login) {
            const res = await authApi.login(login, role);
            console.log(res.data.data);
            user.setUser(res.data.data);
            console.log(user.profile);
        }
    }

    return (
        <div className={'main'}>
            <Label text={'Вход'}/>
            <div className={'flex'}>
                <h3>Логин:</h3>
                <Input
                    value={login}
                    onChangeHandler={(event) => setLogin(event.target.value)}
                />
            </div>
            <div className={'flex_column'}>
                <div>
                    <input
                        type="radio"
                        name="options"
                        value={'applicant'}
                        defaultChecked={true}
                        onChange={(event) => setRole(event.target.value)}
                    /> Соискатель
                </div>
                <div>
                    <input
                        type="radio"
                        name="options"
                        value={'recruiter'}
                        onChange={(event) => setRole(event.target.value)}
                    /> Рекрутер
                </div>
                <div>
                    <input
                        type="radio"
                        name="options"
                        value={'company'}
                        onChange={(event) => setRole(event.target.value)}
                    /> Организация
                </div>
            </div>
            <Button text={'Войти'} handler={() => loginHandler(login, role)}/>
        </div>
    );
};

export default LoginForm;