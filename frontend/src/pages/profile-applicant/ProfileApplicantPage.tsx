import React from 'react';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./ProfileApplicantPageStyle.css"
import user from "../../store/User";
import {observer} from "mobx-react-lite";
import ResponseResultItem from "../../components/ResponseResultItem/ResponseResultItem";
import Label from "../../components/UI/Label/Label";
import KeySkillsForm from "../../components/KeySkillsForm/KeySkillsForm";

const ProfileApplicantPage = observer(() => {
    const updateApplicantProfile = (description: string) => {

    }

    return (
        <div className={"container"}>
            <div className={"flex"}>
                <ProfileInfo name={user.profile?.name || ''} description={user.profile?.description || ''} request={updateApplicantProfile} />
                <KeySkillsForm/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Label text="Загрузите сюда свое резюме:"/>
                    <input type="file" style={{marginLeft: "10px"}}/>
                </div>
            </div>
            <div className="responseResults">
                <Label text={"Результаты откликов"} />
                <ResponseResultItem response={{vacancyName: "Some vacancy", comment: "Ай малаца поешь холодца", id: 1, applicantId: 3, applicantName: "Yuriy", vacancyId: 4, testResult: 95, date: new Date(), status: "Приглашение"}} />
            </div>
        </div>
    );
});

export default ProfileApplicantPage;