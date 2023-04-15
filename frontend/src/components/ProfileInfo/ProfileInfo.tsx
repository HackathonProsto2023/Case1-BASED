import React, {useState} from 'react';
import './ProfileInfo.css';
import Label from "../UI/Label/Label";
import Button from "../UI/Button/Button";

interface props {
    name: string;
    description: string;
    request: (description: string) => void;
}

const ProfileInfo = ({name, description, request}: props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [descriptionInput, setDescriptionInput] = useState<string>(description);

    return (
        <div style={{margin: '0 0 10px 0'}}>
            <Label text={name}/>
            {edit
                ?
                <div style={{width: '300px'}}>
                     <textarea
                         className={'ProfileRecruiterInfo_textarea'}
                         value={descriptionInput}
                         onChange={(event) => {setDescriptionInput(event.target.value)}}
                     />
                    <Button
                        text={'Сохранить'}
                        handler={() => {
                            setEdit(false);
                            request(descriptionInput);
                        }}/>
                </div>
                :
                <div style={{width: '300px'}}>
                    <p>{descriptionInput}</p>
                    <div style={{width: '100px'}}>
                        <Button text={'Изменить'} handler={() => {setEdit(true)}}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfileInfo;