import React from "react"
import "./ResponseItemStyle.css"
import { Link } from "react-router-dom"
import Button from "../UI/Button/Button"

interface props {
    id: number;
    applicantName: string;
    vacancyName: string;
    tasksPercent: number;
}

const ResponseItem = ({id, applicantName, vacancyName, tasksPercent}:props) => {
    return(
        <div className={'flex applicantData'}>
            <div>
                <div><Link to={`recruiter/applicant/${id}`}>ФИО: {applicantName}</Link></div>
                <div><Link to={`recruiter/vacancy/${id}`}>Вакансия: {vacancyName}</Link></div>
                <div>Процент решенных заданий: {tasksPercent}%</div>
            </div>
            <div className={'flex'}>
                <Button text="Принять" />
                <Button text="Отклонить" />
            </div>
        </div>
    )
}

export default ResponseItem;