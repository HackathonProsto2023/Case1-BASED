import React, {useEffect} from 'react';
import "../profile-recruiter/ProfileRecruiterPageStyle.css"
import ResponseList from "../../components/ResponseList/ResponseList";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import RecruiterBlock from "../../components/RecruiterBlock/RecruiterBlock";
import VacancyBlock from "../../components/VacancyBlock/VacancyBlock";
import PageTitle from "../../components/PageTitle/PageTitle";
import user from "../../store/User";
import {observer} from "mobx-react-lite";
import {profileApi} from "../../API/profileApi";
import ICity from "../../models/ICity";
import city from "../../store/City";
import {companyApi} from "../../API/companyApi";
import company from "../../store/Company";

const ProfileRecruiterPage = observer(() => {

    const updateRecruiterProfile = async (name: string, description: string, city_id: number) => {
        const res = await profileApi.update(user.id, name, description, city_id);
        if (res.status === 200) {
            const newCity: ICity =  city.cities.filter((city) => city_id === city.id)[0];
            user.update(name, description, newCity);
        }
    }

    useEffect(() => {
        (async () => {
            const res = await companyApi.getVacancies(user.id);
            company.setVacancies(res.data.data);
        })();
    }, [])

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