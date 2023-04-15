import {makeAutoObservable} from "mobx";
import IRecruiter from "../models/IRecruiter";
import IResponse from "../models/IResponse";
import IVacancy from "../models/IVacancy";

class Company {
    recruiters: IRecruiter[] = [
        {id: 1, name: 'Vlad'},
        {id: 1, name: 'Yuriy'},
        {id: 1, name: 'Valya'},
        {id: 1, name: 'Artem'},
    ];
    vacancies: IVacancy[] = [
        {id: 1, name: 'Junior', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL']},
        {id: 1, name: 'Middle', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL']},
        {id: 1, name: 'Senior', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL']},
        {id: 1, name: 'Senior plus', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL']},
    ];
    responses: IResponse[] = [
        {applicantId: 1, vacancyId: 4, applicantName: 'Vlad', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
        {applicantId: 2, vacancyId: 3, applicantName: 'Yuriy', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
        {applicantId: 3, vacancyId: 2, applicantName: 'Valya', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
        {applicantId: 4, vacancyId: 1, applicantName: 'Artem', vacancyName: 'Senior Java Developer', tasksPercent: 100, date: new Date()},
    ];
    constructor() {
        makeAutoObservable(this);
    }
}

export default new Company();