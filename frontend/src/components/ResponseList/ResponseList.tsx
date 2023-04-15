import React from 'react';
import ResponseItem from "../ResponseItem/ResponseItem";
import Label from "../UI/Label/Label";

const ResponseList = () => {
    const responses = [
        {id: 1, applicantName: 'Vlad', vacancyName: 'Senior Java Developer', tasksPercent: 100},
        {id: 2, applicantName: 'Yuri', vacancyName: 'Senior Java Developer', tasksPercent: 100},
        {id: 3, applicantName: 'Valya', vacancyName: 'Senior Java Developer', tasksPercent: 100},
        {id: 4, applicantName: 'Artem', vacancyName: 'Senior Java Developer', tasksPercent: 100},
    ]

    return (
        <div>
            <Label text={'Отклики'}/>
            {responses.map((response) => <ResponseItem
                id={response.id}
                applicantName={response.applicantName}
                tasksPercent={response.tasksPercent}
                vacancyName={response.vacancyName}
            />)}
        </div>
    );
};

export default ResponseList;