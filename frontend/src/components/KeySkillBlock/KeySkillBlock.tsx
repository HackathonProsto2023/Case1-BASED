import React from 'react';
import Label from "../UI/Label/Label";
import KeySkillForm from "./KeySkillForm/KeySkillForm";
import KeySkillList from "./KeySkillList/KeySkillList";

interface props {
    addHandler: (keySkill: string) => void;
    removeHandler: (keySkill: string) => void;
    keySkills: string[];
}

const KeySkillBlock = ({addHandler, removeHandler, keySkills}: props) => {
    return (
        <div className={"flex_column"} style={{width: '0 0 10px 0'}}>
            <Label text="Ключевые навыки" />
            <KeySkillForm handler={addHandler}/>
            <KeySkillList keySkills={keySkills} removeHandler={removeHandler}/>
        </div>
    );
};

export default KeySkillBlock;