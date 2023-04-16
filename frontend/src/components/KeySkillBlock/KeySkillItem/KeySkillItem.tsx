import React from "react";
import "./KeySkillItemStyle.css"
import user from "../../../store/User";
import {observer} from "mobx-react-lite";

interface props {
    keySkill: string;
    removeHandler: (keySkill: string) => void;
}

const KeySkillItem = observer(({keySkill, removeHandler}: props) => {
    return(
        <div className={"KeySkillItemStyle"} onClick={() => removeHandler(keySkill)}>{keySkill}</div>
    )
})

export default KeySkillItem;