import {makeAutoObservable} from "mobx";
import IUser from "../models/IUser";

class User {
    id: number = 0;
    name: string = '';
    description: string = '';
    role: string = 'APPLICANT';

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