import React from 'react';
import RecruiterForm from "./RecruiterForm/RecruiterForm";
import RecruiterList from "./RecruiterList/RecruiterList";
import Label from "../UI/Label/Label";

const RecruiterBlock = () => {
    return (
        <div>
            <Label text={'Рекрутеры компании'}/>
            <RecruiterForm />
            <RecruiterList />
        </div>
    );
};

export default RecruiterBlock;