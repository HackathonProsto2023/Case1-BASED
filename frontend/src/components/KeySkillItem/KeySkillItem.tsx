import React from "react";
import "./KeySkillItemStyle.css"

interface props {
    keySkill: string
}

const KeySkillItem = ({keySkill}: props) => {
    return(
        <div className={"KeySkillItemStyle"}>{keySkill}</div>
    )
}

export default KeySkillItem;