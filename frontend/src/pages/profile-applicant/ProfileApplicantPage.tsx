import React from 'react';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./ProfileApplicantPageStyle.css"
import user from "../../store/User";
import {observer} from "mobx-react-lite";
import ResponseResultItem from "../../components/ResponseResultItem/ResponseResultItem";
import Label from "../../components/UI/Label/Label";

const ProfileApplicantPage = observer(() => {
    const updateApplicantProfile = (description: string) => {

    }

    return (
        <div className={"container"}>
            <ProfileInfo name={user.name} description={user.description} request={updateApplicantProfile} />

            <div className="responseResults">
                <Label text={"Результаты откликов"} />
                <ResponseResultItem vacancy="Some vacancy" isAccepted="Приглашение" comment="Ай маладца возьми холодца" />
            </div>
        </div>
    );
});

export default ProfileApplicantPage;