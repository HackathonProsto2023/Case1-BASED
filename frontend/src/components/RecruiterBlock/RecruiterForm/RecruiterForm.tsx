import React from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {observer} from "mobx-react-lite";

const RecruiterForm = observer(() => {
    return (
        <div className={'flex'} style={{margin: '0 0 10px 0'}}>
            <Input placeholder={'login'} value={''}/>
            <Button text={'Добавить'}/>
        </div>
    );
});

export default RecruiterForm;