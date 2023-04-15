import React from "react"
import "./ResponseItemStyle.css"
import { Link } from "react-router-dom"
import Button from "../UI/Button/Button"
import IResponse from "../../models/IResponse";

interface props {
    response: IResponse;
}

const ResponseItem = ({response}:props) => {
    return(
        <div className={'flex applicantData'}>
            <div>
                <div><Link to={`/recruiter/applicant/${response.applicantId}`}>ФИО: {response.applicantName}</Link></div>
                <div><Link to={`/recruiter/vacancy/${response.vacancyId}`}>Вакансия: {response.vacancyName}</Link></div>
                <div>Процент решенных заданий: {response.testResult}%</div>
                <div>Отправлено: {response.date.toString()}</div>
            </div>
            <div className={'flex'}>
                <Button text="Принять" />
                <Button text="Отклонить" />
            </div>
        </div>
    )
}

export default ResponseItem;