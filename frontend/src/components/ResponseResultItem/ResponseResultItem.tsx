import React from "react";
import "./ResponseResultItemStyle.css"

interface result {
    vacancy: string
    isAccepted: string
    comment: string
}

const ResponseResultItem = ({vacancy, comment, isAccepted}: result) => {
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