import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {observer} from "mobx-react-lite";
import company from "../../../store/Company";

const RecruiterForm = observer(() => {
    const [recruiterName, setRecruiterName] = useState<string>('');

    const addRecruiter = (name: string) => {
        if (recruiterName) {
            const id = Date.now();
            company.addRecruiter({id, name});
            setRecruiterName('');
        }
    }

    return (
        <div className={'flex'} style={{margin: '0 0 10px 0'}}>
            <Input
                placeholder={'login'}
                value={recruiterName}
                onChangeHandler={(event) => setRecruiterName(event.target.value)}/>
            <Button text={'Добавить'} handler={() => addRecruiter(recruiterName)}/>
        </div>
    );
});

export default RecruiterForm;