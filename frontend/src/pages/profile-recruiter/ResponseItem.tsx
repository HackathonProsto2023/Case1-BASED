import React from "react"
import "../profile-recruiter/ResponseItemStyle.css"
import { Link } from "react-router-dom"
import Button from "../../components/UI/Button/Button"

interface applicant {
    id: number
    name: string
    age: number
    tasksPercent: number
    CV: any
}

const ResponceItem = ({id, name, age, tasksPercent, CV}:applicant) => {
    return(
        <div>
            <div className="applicantData">
                <div className="applicantDescription">
                    <div><Link to={`/applicant/${id}`}>ФИО: {name}</Link></div>
                    <div>Возраст: {age}</div>
                    <div>Процент решенных заданий: {tasksPercent.toString()}</div>
                </div>
                <div className="applicantCV">{CV}</div>
            </div>
            <Button text="Принять"></Button>
        </div>
    )
}

export default ResponceItem;