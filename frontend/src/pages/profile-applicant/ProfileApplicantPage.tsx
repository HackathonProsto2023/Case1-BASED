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
            <ProfileInfo name={user.profile?.name || ''} description={user.profile?.description || ''} request={updateApplicantProfile} />
            <KeySkillsForm/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Label text="Загрузите сюда свое резюме:"/>
                <input type="file" style={{marginLeft: "10px"}}/>
            </div>
            <div className="responseResults">
                <Label text={"Результаты откликов"} />
                <ResponseResultItem vacancy="Some vacancy" isAccepted="Приглашение" comment="Ай маладца возьми холодца" />
            </div>
        </div>
    );
});

export default ProfileApplicantPage;