import {makeAutoObservable} from "mobx";
import IUser from "../models/IUser";

class User {
    id: number = 1;
    name: string = 'Yuriy';
    description: string = 'Description of Yuriy';
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