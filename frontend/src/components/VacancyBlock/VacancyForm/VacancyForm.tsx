import React from 'react';
import Input from "../../UI/Input/Input";

const VacancyForm = () => {
    return (
        <div className={'flex_column'}>
            <Input value={''} placeholder={'Название вакансии'}/>
            <textarea ></textarea>
        </div>
    );
};

export default VacancyForm;