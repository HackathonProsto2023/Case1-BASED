import {makeAutoObservable} from "mobx";
import IUser from "../models/IUser";

class User {
    id: number = 1;
    name: string = 'СБЕР';
    description: string = '';
    role: string = 'RECRUITER';

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: IUser) {
        this.id = user.id;
        this.name = user.name;
        this.description = user.description;
        this.role = user.role;
    }
}

export default new User()