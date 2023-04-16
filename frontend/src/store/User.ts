import {makeAutoObservable} from "mobx";
import IUser from "../models/IUser";
import IProfile from "../models/IProfile";

class User {
    id: number = 1;
    login: string = 'СБЕР';
    role: string = 'APPLICANT';
    profile: IProfile = {
        id: 1,
        name: 'СБЕР',
        description: 'Большое описание большое описание большое описание большое описание большое описание большое описание',
        keySkills: ['Java', 'Python', 'SQL'],
        city: {
            id: 1,
            name: 'Санкт-Петербург'
        }
    }

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: IUser) {
        this.id = user.id;
        this.login = user.login;
        this.role = user.role;
        this.profile = user.profile;
    }

    update(name: string, description: string) {
        this.profile.name = name;
        this.profile.description = description;
    }

    clear() {
        this.id = 0;
        this.login = '';
        this.role = 'APPLICANT';
        this.profile = {
            id: 0,
            name: '',
            description: '',
            keySkills: [],
            city: {
                id: 1,
                name: 'Санкт-Петербург'
            }};
    }

    addSkill(skill: string) {
        this.profile?.keySkills.push(skill);
    }

    removeSkill(name: string) {
        this.profile.keySkills = this.profile?.keySkills.filter((keySkill) => keySkill != name);
    }
}

export default new User()