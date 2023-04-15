import React from 'react';
import './Header.css';
import {observer} from "mobx-react-lite";
import user from "../../store/User";
import Button from "../UI/Button/Button";

const Header = observer(() => {
    return (
        <div className={'header'}>
            <div className={'title'}>Пульса.net</div>
            {user.id
                ? <Button text={'Выйти'}/>
                : <Button text={'Войти'}/>
            }
        </div>
    );
});

export default Header;