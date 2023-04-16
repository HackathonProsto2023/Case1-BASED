import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import IProfile from "../../models/IProfile";
import PageTitle from "../../components/PageTitle/PageTitle";
import Label from "../../components/UI/Label/Label";
import KeySkillList from "../../components/KeySkillBlock/KeySkillList/KeySkillList";

const ApplicantPage = () => {
    const {id} = useParams();
    const [applicant, setApplicant] = useState<IProfile | null>()

    useEffect(() => {
        if (id) {
            setApplicant({id: +id, name: 'test', description: 'test', keySkills: ['test', 'test', 'test'], city: {id: 1, name: 'Санкт=Петербург'}})
        }
    }, [id]);

    return (
        <div className={'container'}>
            <PageTitle text={'Профиль соискателя'}/>
            <div className={'flex'} style={{gap: '100px'}}>
                <div style={{width: '300px'}}>
                    <Label text={applicant?.name || ''}/>
                    <div>{applicant?.description}</div>
                    <Label text={'Ключевые навыки'}/>
                    <KeySkillList removeHandler={() => {}} keySkills={applicant?.keySkills || []}/>
                </div>
                <div>
                    Тут пдф резюме
                </div>
            </div>
        </div>
    );
};

export default ApplicantPage;