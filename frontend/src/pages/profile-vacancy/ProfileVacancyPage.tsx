import React, {useEffect, useState} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import {useParams} from "react-router-dom";
import IVacancy from "../../models/IVacancy";
import company from "../../store/Company";
import Label from "../../components/UI/Label/Label";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import KeySkillBlock from "../../components/KeySkillBlock/KeySkillBlock";
import {observer} from "mobx-react-lite";

const ProfileVacancyPage = observer(() => {
    const {id = 0} = useParams();
    const [vacancy, setVacancy] = useState<IVacancy | null>(null);
    const [edit, setEdit] = useState<boolean>(false);
    const [vacancyName, setVacancyName] = useState<string>('');
    const [vacancyDescription, setVacancyDescription] = useState<string>('');

    useEffect(() => {
        const fetchedVacancy: IVacancy = company.vacancies.filter((storeVacancy) => storeVacancy.id === +id)[0];
        setVacancy(fetchedVacancy);
    }, [id, company.vacancies])

    useEffect(() => {
        setVacancyName(vacancy?.name || '');
        setVacancyDescription(vacancy?.description || '');
    }, [vacancy])

    const addKeySkill = (keySkill: string) => {
        company.addKeySkill(+id, keySkill);

    }

    const removeKeySkill = (keySkill: string) => {
        company.removeKeySkill(+id, keySkill)
    }

    const saveUpdates = (name: string, description: string) => {
        company.updateVacancy(+id, name, description);
        setEdit(false);
    }

    return (
        <div className={'container'}>
            <PageTitle text={'Профиль вакансии'}/>
            <div className={'flex'} style={{gap: '100px'}}>
                {edit
                    ?
                    <div className={'flex_column'} style={{width: '300px'}}>
                        <Input
                            placeholder={'Название'}
                            value={vacancyName}
                            onChangeHandler={(event) => {setVacancyName(event.target.value)}}
                        />
                        <textarea
                            rows={5}
                            placeholder={'Описание'}
                            value={vacancyDescription}
                            onChange={(event) => setVacancyDescription(event.target.value)}
                        />
                        <div>Дата создания: {vacancy?.date.toString()}</div>
                        <Button text={'Сохранить'} handler={() => saveUpdates(vacancyName, vacancyDescription)}/>
                    </div>
                    :
                    <div className={'flex_column'} style={{width: '300px'}}>
                        <Label text={vacancy?.name || ''}/>
                        <div>{vacancy?.description}</div>
                        <div>Дата создания: {vacancy?.date.toString()}</div>
                        <Button text={'Изменить'} handler={() => {
                            setEdit(true);
                        }}/>
                    </div>
                }
                <KeySkillBlock addHandler={addKeySkill} removeHandler={removeKeySkill} keySkills={vacancy?.keySkills || []}/>
            </div>
        </div>
    );
});

export default ProfileVacancyPage;