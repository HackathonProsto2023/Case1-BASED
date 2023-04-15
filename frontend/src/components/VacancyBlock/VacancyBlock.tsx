import React from 'react';
import VacancyForm from "./VacancyForm/VacancyForm";
import VacancyList from "./VacancyList/VacancyList";
import {observer} from "mobx-react-lite";
import Label from "../UI/Label/Label";

const VacancyBlock = observer(() => {
    return (
        <div>
            <Label text={'Добавить вакансию'}/>
            <VacancyForm />
            <Label text={'Активные вакансии'}/>
            <VacancyList />
        </div>
    );
});

export default VacancyBlock;