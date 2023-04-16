import React from 'react';
import KeySkillItem from "../KeySkillItem/KeySkillItem";
import {observer} from "mobx-react-lite";

interface props {
    keySkills: string[];
    removeHandler: (keySkill: string) => void;
}

const KeySkillList = observer(({keySkills, removeHandler}: props) => {
    return (
        <div className="keySkillsList">
            {keySkills ? keySkills.map(keySkill => <KeySkillItem keySkill={keySkill} removeHandler={removeHandler}/>) : null}
        </div>
    );
});

export default KeySkillList;