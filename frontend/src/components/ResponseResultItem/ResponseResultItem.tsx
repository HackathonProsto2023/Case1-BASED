import React from "react";
import "./ResponseResultItemStyle.css"
import {Link} from "react-router-dom";
import IResponse from "../../models/IResponse";

interface props {
    response: IResponse
}

const ResponseResultItem = ({response}: props) => {
    return (
        <div className="mainContainer">
            <div className="description">
                <Link to={`/applicant/vacancy/${response.id}`} id="vacancyName">{response.vacancyName}</Link>
                <div id="comment">{response.comment}</div>
            </div>
            <div id="isAccepted" style={{color: response.status? "green": "red"}}>{response.status}</div>
        </div>
    )
}

export default ResponseResultItem;