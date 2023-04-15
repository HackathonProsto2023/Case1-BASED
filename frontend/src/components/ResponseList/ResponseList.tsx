import React from 'react';
import ResponseItem from "../ResponseItem/ResponseItem";
import Label from "../UI/Label/Label";
import IResponse from "../../models/IResponse";

const ResponseList = () => {
    const responses: IResponse[] = [
        {applicantId: 1, vacancyId: 4, applicantName: 'Vlad', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
        {applicantId: 2, vacancyId: 3, applicantName: 'Yuri', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
        {applicantId: 3, vacancyId: 2, applicantName: 'Valya', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
        {applicantId: 4, vacancyId: 1, applicantName: 'Artem', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
    ]

    return (
        <div>
            <Label text={'Отклики'}/>
            {responses.map((response) => <ResponseItem
                response={response}
            />)}
        </div>
    );
};

export default ResponseList;