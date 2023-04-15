import React from 'react';
import "../profile-recruiter/ProfileRecruiterPageStyle.css"
import ResponseList from "../../components/ResponseList/ResponseList";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import RecruiterBlock from "../../components/RecruiterBlock/RecruiterBlock";
import VacancyBlock from "../../components/VacancyBlock/VacancyBlock";

const ProfileRecruiterPage = () => {
    const recruiter = {
        name: 'СБЕР',
        description: 'очень большое и крутое описание'
    }

    const updateRecruiterProfile = (description: string) => {

    }

    return (
        <div className={'container'}>
            <div className={'flex'} style={{gap: '100px'}}>
                <ProfileInfo name={recruiter.name} description={recruiter.description} request={updateRecruiterProfile}/>
                <RecruiterBlock />
            </div>
            <VacancyBlock />
            <ResponseList/>
        </div>
    );
};

export default ProfileRecruiterPage;