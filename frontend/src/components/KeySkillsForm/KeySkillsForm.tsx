import React, {useState} from "react";
import "./KeySkillsFormStyle.css"
import Button from "../UI/Button/Button";
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";

const KeySkillsForm = () => {
    const [keySkill, setKeySkill] = useState<string>("")
    let counter = 1
    const addKeySkill = (keySkill: string) => {

    }
    return (
        <div className={"keySkillForm"}>
            <Label text="Укажите Ваши ключевые навыки" />
            <Input
                placeholder="Введите ключевой навык"
                value={keySkill}
                onChangeHandler={(event)=> setKeySkill(event.target.value)}
            />
            <Button text="Добавить ключевой навык" handler={()=>{addKeySkill(keySkill)}}/>
            <div className="keySkillsList"></div>
        </div>
    )
}

export default KeySkillsForm;