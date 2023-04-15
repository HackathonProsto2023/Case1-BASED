import React from 'react';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./ProfileApplicantPageStyle.css"
import user from "../../store/User";
import {observer} from "mobx-react-lite";
import ResponseResultItem from "../../components/ResponseResultItem/ResponseResultItem";

const ProfileApplicantPage = observer(() => {
    const updateApplicantProfile = (description: string) => {

    }

    return (
        <div>
            <ProfileInfo name={user.name} description={user.description} request={updateApplicantProfile} />
            <div className="responseResults">
                <h1 style={{textAlign: "center", marginBottom: "10px"}}>Результаты ваших откликов на резюме</h1>
                <ResponseResultItem vacancy="Some vacancy" isAccepted="Приглашение" comment="Ай маладца возьми холодца" />
            </div>
        </div>
    );
});

export default ProfileApplicantPage;