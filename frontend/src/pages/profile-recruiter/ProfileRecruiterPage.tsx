import React from 'react';
import "../profile-recruiter/ProfileRecruiterPageStyle.css"
import ResponseList from "../../components/ResponseList/ResponseList";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import RecruiterBlock from "../../components/RecruiterBlock/RecruiterBlock";
import VacancyBlock from "../../components/VacancyBlock/VacancyBlock";
import PageTitle from "../../components/PageTitle/PageTitle";
import user from "../../store/User";
import {observer} from "mobx-react-lite";

const ProfileRecruiterPage = observer(() => {


    const updateRecruiterProfile = (name: string, description: string) => {

        // user.update(name, description);
    }

    return (
        <div className={'container'}>
            <PageTitle text={'Профиль организации'}/>
            <div className={'flex'} style={{gap: '100px'}}>
                <ProfileInfo name={user.profile?.name} description={user.profile?.description} city_id={user.profile.city.id} request={updateRecruiterProfile}/>
                <RecruiterBlock />
            </div>
            <VacancyBlock />
            <ResponseList/>
        </div>
    );
});

export default ProfileRecruiterPage;