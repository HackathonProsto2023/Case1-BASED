import React from 'react';
import "../profile-recruiter/ProfileRecruiterPageStyle.css"
import ResponseList from "../../components/ResponseList/ResponseList";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const ProfileRecruiterPage = () => {
    const recruiter = {
        name: 'СБЕР',
        description: 'очень большое и крутое описание'
    }

    const updateRecruiterProfile = (description: string) => {

    }

    return (
        <div className={'container'}>
            <ProfileInfo name={recruiter.name} description={recruiter.description} request={updateRecruiterProfile}/>
            <ResponseList/>
        </div>
    );
};

export default ProfileRecruiterPage;