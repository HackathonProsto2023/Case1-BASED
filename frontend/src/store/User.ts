import {makeAutoObservable} from "mobx";
import IUser from "../models/IUser";
import IProfile from "../models/IProfile";
import ICity from "../models/ICity";

class User {
    id: number = 0;
    login: string = '';
    role: string = 'APPLICANT';
    profile: IProfile = {
        id: 0,
        name: '',
        description: '',
        keySkills: [],
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
        this.profile = {
            id: user.profile.id,
            name: user.profile.name || '',
            description: user.profile.description || '',
            keySkills: user.profile.keySkills,
            city: {
                id: 1,
                name: 'Санкт-Петербург'
            }
        };
    }

    update(name: string, description: string, city: ICity) {
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
        if (this.profile.keySkills) {
            this.profile.keySkills.slice().push(skill);
        }
    }

    removeSkill(name: string) {
        this.profile.keySkills = this.profile?.keySkills.filter((keySkill) => keySkill != name);
    }
}

export default new User()