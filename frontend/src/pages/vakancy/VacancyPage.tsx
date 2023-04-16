import React from 'react';
import "./VacancyPageStyle.css"
import PageTitle from "../../components/PageTitle/PageTitle";
import Label from "../../components/UI/Label/Label";
import Button from "../../components/UI/Button/Button";
import KeySkillItem from "../../components/KeySkillItem/KeySkillItem";

const VacancyPage = () => {
    return (
        <div className={"container"}>
            <PageTitle text="Вакансия"/>
            <div className="content">
                <div className="vacancyInfo">
                    <Label text="Junior"/>
                    <div>Some description of Junior vacancy</div>
                    <div>Created at April 16, 2023, 5:54</div>
                    <Button text="Откликнуться"/>
                </div>
                <div className="keySkillsArray">
                    <Label text="Ключевые навыки"/>
                    <KeySkillItem keySkill="HTML"/>
                    <KeySkillItem keySkill="CSS"/>
                </div>
                <div className="customerInfo">
                    <Label text="Организация: ЗАКАЗЧИК_NAME"/>
                    <div>Просто текст-рыба (и мне лень было переключать на английский)</div>
                </div>
            </div>
        </div>
    );
};

export default VacancyPage;