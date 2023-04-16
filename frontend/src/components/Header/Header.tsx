import React from 'react';
import './Header.css';
import {observer} from "mobx-react-lite";
import user from "../../store/User";
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const Header = observer(() => {
    return (
        <div className={'header'}>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div className={'header_title'}>Пульса.net</div>
            </Link>
            {user.id
                ?
                <div className={'flex'} style={{alignItems: 'center'}}>
                    <Link
                        className={'title'}
                        to={user.role === 'applicant' ? '/applicant/profile' : '/recruiter/profile'}
                    >{user.login}</Link>
                    <Button text={'Выйти'} handler={() => user.clear()}/>
                </div>
                :
                <Link to={'login'} style={{textDecoration: 'none'}}>
                    <Button text={'Войти'}/>
                </Link>
            }
        </div>
    );
});

export default Header;