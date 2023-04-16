import React, {useState} from 'react';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./ProfileApplicantPageStyle.css"
import user from "../../store/User";
import {observer} from "mobx-react-lite";
import ResponseResultItem from "../../components/ResponseResultItem/ResponseResultItem";
import Label from "../../components/UI/Label/Label";
import KeySkillBlock from "../../components/KeySkillBlock/KeySkillBlock";
import {skillApi} from "../../API/skillApi";
import {profileApi} from "../../API/profileApi";
import ICity from "../../models/ICity";
import city from "../../store/City";

const ProfileApplicantPage = observer(() => {
    const [resume, setResume] = useState<any>();
    const updateApplicantProfile = async (name: string, description: string, city_id: number) => {
        const res = await profileApi.update(user.id, name, description, city_id);
        const newCity: ICity = city.cities.filter((city) => city.id === city_id)[0];
        user.update(name, description, newCity);
    }

    const addKeySkill = async (inputKeySkill: string) => {
        if (inputKeySkill) {
            const res = await skillApi.addSkillToApplicant(user.id, user.role, inputKeySkill);
            if (res.status === 200) {
                user.addSkill(inputKeySkill)
            }
        }
    }

    const removeSkill = (keySkill: string) => {
        user.removeSkill(keySkill)
    }

    const showPicture = (event: any) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setResume(e.target?.result);
        };
        reader.readAsDataURL(event.target.files[0]);
        // console.log(event.target.files[0]);
        // setResume(event.target.files[0]);
    }

    return (
        <div className={"container"}>
            <div className={"flex"}>
                <ProfileInfo name={user.profile?.name || ''} description={user.profile?.description || ''} city_id={user.profile?.city.id} request={updateApplicantProfile} />
                <KeySkillBlock addHandler={addKeySkill} removeHandler={removeSkill} keySkills={user.profile.keySkills}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Label text="Загрузите сюда свое резюме:"/>
                    <input
                        type="file"
                        style={{marginLeft: "10px"}}
                        onChange={(event) => showPicture(event)}
                    />
                    <img src={resume} style={{maxWidth: '600px', border: '2px solid green'}} alt="resume"/>
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