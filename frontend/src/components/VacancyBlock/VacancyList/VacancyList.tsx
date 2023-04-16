import React from 'react';
import {observer} from "mobx-react-lite";
import VacancyItem from "../VacancyItem/VacancyItem";
import IVacancy from "../../../models/IVacancy";

interface props {
    vacancies: IVacancy[]
}

const VacancyList = observer(({vacancies}: props) => {
    return (
        <div>
            {vacancies.length
                ? vacancies.map((vacancy) => <VacancyItem vacancy={vacancy}/>)
                : 'Добавьте вакансию'
            }
        </div>
    );
});

export default VacancyList;