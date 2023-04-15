import React from 'react';
import {observer} from "mobx-react-lite";
import company from "../../../store/Company";
import VacancyItem from "../VacancyItem/VacancyItem";

const VacancyList = observer(() => {
    return (
        <div>
            {company.vacancies.map((vacancy) => <VacancyItem vacancy={vacancy}/>)}
        </div>
    );
});

export default VacancyList;