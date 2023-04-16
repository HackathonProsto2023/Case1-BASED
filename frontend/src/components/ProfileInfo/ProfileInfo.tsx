import React, {useState} from 'react';
import './ProfileInfo.css';
import Label from "../UI/Label/Label";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {observer} from "mobx-react-lite";
import city from "../../store/City";
import {profileApi} from "../../API/profileApi";
import user from "../../store/User";
import ICity from "../../models/ICity";

interface props {
    name: string;
    description: string;
    city_id: number;
    request: (name: string, description: string, city_id: number) => void;
}

const ProfileInfo = observer(({name, description, city_id, request}: props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [descriptionInput, setDescriptionInput] = useState<string>(description);
    const [nameInput, setNameInput] = useState<string>(name);
    const [cityInput, setCityInput] = useState<number>(city_id);

    return (
        <div style={{margin: '0 0 10px 0'}}>
            {edit
                ?
                <div className={'flex_column'} style={{width: '300px'}}>
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
                    <select onChange={(event) => setCityInput(+event.target.value)}>
                        {city.cities.map((city) => <option value={city.id} defaultChecked={city.id === city_id}>{city.name}</option>)}
                    </select>
                    <Button
                        text={'Сохранить'}
                        handler={() => {
                            setEdit(false);
                            request(nameInput, descriptionInput, cityInput);
                        }}/>
                </div>
                :
                <div style={{width: '300px'}}>
                    <Label text={name}/>
                    <div style={{margin: '0 0 10px 0'}}>{descriptionInput}</div>
                    <div style={{margin: '0 0 10px 0'}}>Город: {city.cities.filter((city) => city_id === city.id)[0].name}</div>
                    <div style={{width: '100px'}}>
                        <Button text={'Изменить'} handler={() => {setEdit(true)}}/>
                    </div>
                </div>
            }
        </div>
    );
});

export default ProfileInfo;