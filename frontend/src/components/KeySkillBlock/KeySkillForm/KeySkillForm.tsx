import React, {useState} from "react";
import "./KeySkillFormStyle.css"
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {observer} from "mobx-react-lite";

interface props {
    handler: (keySkill: string) => void;
}

const KeySkillForm = observer(({handler}: props) => {
    const [keySkillInput, setKeySkillInput] = useState('')

    return (
        <div className={"keySkillForm"}>
            <div className="inputDiv">
                <Input
                    placeholder="навык"
                    value={keySkillInput}
                    onChangeHandler={(event)=> {
                        setKeySkillInput(event.target.value)
                    }
                }
                />
                <Button text="Добавить" handler={()=>{
                    handler(keySkillInput);
                    setKeySkillInput('');
                }
                }/>
            </div>
        </div>
    )
})

export default KeySkillForm;