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
            {keySkills.map(keySkill => <KeySkillItem keySkill={keySkill} removeHandler={removeHandler}/> )}
        </div>
    );
});

export default KeySkillList;