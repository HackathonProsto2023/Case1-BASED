import React from 'react';
import IVacancy from "../../../models/IVacancy";
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";
import './VacancyItem.css'
interface props {
    vacancy: IVacancy;
}

const VacancyItem = ({vacancy}: props) => {
    return (
        <div className={'flex VacancyItem'}>
                <Link to={`/recruiter/vacancy/${vacancy.id}`}>Вакансия: {vacancy.name}</Link>
                <Button text={'Удалить'}/>
        </div>
    );
};

export default VacancyItem;