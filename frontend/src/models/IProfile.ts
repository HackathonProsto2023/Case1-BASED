import ICity from "./ICity";

export default interface IProfile {
    id: number;
    name: string;
    description: string;
    city: ICity;
    keySkills: string[];
}