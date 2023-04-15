import IProfile from "./IProfile";

export default interface IUser {
    id: number;
    login: string;
    role: string;
    profile: IProfile;
}