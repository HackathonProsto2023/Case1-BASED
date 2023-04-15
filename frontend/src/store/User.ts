import {makeAutoObservable} from "mobx";
import IUser from "../models/IUser";
import IProfile from "../models/IProfile";

class User {
    id: number = 1;
    login: string = 'СБЕР';
    role: string = 'RECRUITER';
    profile: IProfile | null = {
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

    clear() {
        this.id = 0;
        this.login = '';
        this.role = 'APPLICANT';
        this.profile = null;
    }
}

export default new User()