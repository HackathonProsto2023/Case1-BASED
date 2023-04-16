import React from 'react';
import IVacancy from "../../../models/IVacancy";
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";
import './VacancyItem.css'
import company from "../../../store/Company";
import {observer} from "mobx-react-lite";
import user from "../../../store/User";
interface props {
    vacancy: IVacancy;
}

const VacancyItem = observer(({vacancy}: props) => {

    const removeVacancy = (id: number) => {

        company.removeVacancy(id);
    }


    return (
        <div className={'flex VacancyItem'}>
                <Link to={`${user.role === 'applicant' ? '/applicant' : '/recruiter'}/vacancy/${vacancy.id}`}>Вакансия: {vacancy.title}</Link>
                <div>Дата создания: {vacancy.publish_date}</div>
                <Button text={'Удалить'} handler={() => removeVacancy(vacancy.id)}/>
        </div>
    );
});

export default VacancyItem;