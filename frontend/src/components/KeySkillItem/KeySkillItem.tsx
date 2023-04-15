import React from "react";
import "./KeySkillItemStyle.css"
import user from "../../store/User";
import {observer} from "mobx-react-lite";

interface props {
    keySkill: string
}

const KeySkillItem = observer(({keySkill}: props) => {
    const removeSkill = (keySkill: string) => {
        user.removeSkill(keySkill)
    }

    return(
        <div className={"KeySkillItemStyle"} onClick={() => removeSkill(keySkill)}>{keySkill}</div>
    )
})

export default KeySkillItem;