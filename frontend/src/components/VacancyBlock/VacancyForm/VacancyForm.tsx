import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import company from "../../../store/Company";

const VacancyForm = () => {
    const [vacancyName, setVacancyName] = useState<string>('');
    const [vacancyDescription, setVacancyDescription] = useState<string>('');

    const addVacancy = (name: string, description: string) => {
        if (vacancyName && vacancyDescription) {
            company.addVacancy({
                id: Date.now(),
                name,
                description,
                keySkills: [],
                date: new Date()
            });
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