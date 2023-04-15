import React from 'react';
import IRecruiter from "../../../models/IRecruiter";
import Button from "../../UI/Button/Button";
import company from "../../../store/Company";

interface props {
    recruiter: IRecruiter;
}

const RecruiterItem = ({recruiter}: props) => {
    const removeRecruiter = (id: number) => {
        company.removeRecruiter(id);
    }

    return (
        <div className={'flex'} style={{margin: '0 0 10px 0'}}>
            <h3>id: {recruiter.id} имя: {recruiter.name}</h3>
            <Button text={'Удалить'} handler={() => removeRecruiter(recruiter.id)}/>
        </div>
    );
};

export default RecruiterItem;