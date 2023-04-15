import React, {useState} from 'react';
import './ProfileInfo.css';
import Label from "../UI/Label/Label";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {observer} from "mobx-react-lite";

interface props {
    name: string;
    description: string;
    request: (name: string, description: string) => void;
}

const ProfileInfo = observer(({name, description, request}: props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [descriptionInput, setDescriptionInput] = useState<string>(description);
    const [nameInput, setNameInput] = useState<string>(name);

    return (
        <div style={{margin: '0 0 10px 0'}}>
            {edit
                ?
                <div style={{width: '300px'}}>
                    <Input
                        placeholder={'Имя'}
                        value={nameInput}
                        onChangeHandler={(event) => {setNameInput(event.target.value)}}
                    />
                     <textarea
                         className={'ProfileRecruiterInfo_textarea'}
                         value={descriptionInput}
                         onChange={(event) => {setDescriptionInput(event.target.value)}}
                     />
                    <Button
                        text={'Сохранить'}
                        handler={() => {
                            setEdit(false);
                            request(nameInput, descriptionInput);
                        }}/>
                </div>
                :
                <div style={{width: '300px'}}>
                    <Label text={name}/>
                    <p style={{margin: '0 0 10px 0'}}>{descriptionInput}</p>
                    <div style={{width: '100px'}}>
                        <Button text={'Изменить'} handler={() => {setEdit(true)}}/>
                    </div>
                </div>
            }
        </div>
    );
});

export default ProfileInfo;