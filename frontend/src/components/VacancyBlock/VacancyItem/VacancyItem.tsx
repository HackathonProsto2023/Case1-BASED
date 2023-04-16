import React from 'react';
import IVacancy from "../../../models/IVacancy";
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";
import './VacancyItem.css'
import company from "../../../store/Company";
interface props {
    vacancy: IVacancy;
}

const VacancyItem = ({vacancy}: props) => {

    const removeVacancy = (id: number) => {
        company.removeVacancy(id);
    }

    return (
        <div className={'flex VacancyItem'}>
                <Link to={`/applicant/vacancy/${vacancy.id}`}>Вакансия: {vacancy.name}</Link>
                <div>Дата создания: {vacancy.date.toString()}</div>
                <Button text={'Удалить'} handler={() => removeVacancy(vacancy.id)}/>
        </div>
    );
};

export default VacancyItem;