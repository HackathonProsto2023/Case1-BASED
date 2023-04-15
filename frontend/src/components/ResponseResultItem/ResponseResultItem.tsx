import React from "react";
import "./ResponseResultItemStyle.css"
import {Link} from "react-router-dom";

interface props {
    vacancy: string
    isAccepted: string
    comment: string
}

const ResponseResultItem = ({vacancy, comment, isAccepted}: props) => {
    return (
        <div className="mainContainer">
            <div className="description">
                <strong id="vacancyName">{vacancy}</strong>
                <div id="comment">{comment}</div>
            </div>
            <div id="isAccepted" style={{color: isAccepted? "green": "red"}}>{isAccepted}</div>
        </div>
    )
}

export default ResponseResultItem;