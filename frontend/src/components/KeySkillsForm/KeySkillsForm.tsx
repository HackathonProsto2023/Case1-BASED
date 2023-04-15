import React, {useState} from "react";
import "./KeySkillsFormStyle.css"
import Button from "../UI/Button/Button";
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import user from "../../store/User";
import KeySkillItem from "../KeySkillItem/KeySkillItem";
import {observer} from "mobx-react-lite";

const KeySkillsForm = observer(() => {
    const [keySkillInput, setKeySkillInput] = useState('')

    const addKeySkill = (inputKeySkill: string) => {
        if (inputKeySkill) {
            user.addSkill(inputKeySkill)
            setKeySkillInput("")
        }

    }

    return (
        <div className={"keySkillForm"}>
            <Label text="Укажите Ваши ключевые навыки" />
            <div className="inputDiv">
                <Input
                    placeholder="Введите ключевой навык"
                    value={keySkillInput}
                    onChangeHandler={(event)=> {
                        setKeySkillInput(event.target.value)
                    }
                }
                />
                <Button text="Добавить" handler={()=>{
                    addKeySkill(keySkillInput)
                }
                }/>
            </div>
            <div className="keySkillsList">
                {user.profile?.keySkills.map(keySkill => <KeySkillItem keySkill={keySkill
                }/> )}
            </div>
        </div>
    )
})

export default KeySkillsForm;