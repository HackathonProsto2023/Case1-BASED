import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import company from "../../../store/Company";
import {companyApi} from "../../../API/companyApi";
import user from "../../../store/User";
import loginForm from "../../LoginForm/LoginForm";

const VacancyForm = () => {
    const [vacancyName, setVacancyName] = useState<string>('');
    const [vacancyDescription, setVacancyDescription] = useState<string>('');

    const addVacancy = async (name: string, description: string) => {
        if (vacancyName && vacancyDescription) {
            const res = await companyApi.addVacancy(user.id, name, description);
            console.log(res);
            company.addVacancy(res.data.data);
            setVacancyName('');
            setVacancyDescription('');
        }
    }

    return (
        <div className={'flex_column'} style={{margin: '0 0 10px 0'}}>
            <Input
                placeholder={'Название вакансии'}
                value={vacancyName}
                onChangeHandler={(event) => setVacancyName(event.target.value)}
            />
            <textarea
                placeholder={'Описание вакансии'}
                rows={5}
                value={vacancyDescription}
                onChange={(event) => setVacancyDescription(event.target.value)}
            />
            <Button text={'Добавить'} handler={() => addVacancy(vacancyName, vacancyDescription)}/>
        </div>
    );
};

export default VacancyForm;