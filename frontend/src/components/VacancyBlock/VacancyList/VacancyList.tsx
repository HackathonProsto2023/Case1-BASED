import React from 'react';
import {observer} from "mobx-react-lite";
import company from "../../../store/Company";
import VacancyItem from "../VacancyItem/VacancyItem";

const VacancyList = observer(() => {
    return (
        <div>
            {company.vacancies.length
                ? company.vacancies.map((vacancy) => <VacancyItem vacancy={vacancy}/>)
                : 'Добавьте вакансию'
            }
        </div>
    );
});

export default VacancyList;