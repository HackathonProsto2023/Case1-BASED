import {makeAutoObservable} from "mobx";
import IRecruiter from "../models/IRecruiter";
import IResponse from "../models/IResponse";
import IVacancy from "../models/IVacancy";

class Company {
    recruiters: IRecruiter[] = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Yuriy'},
        {id: 3, name: 'Valya'},
        {id: 4, name: 'Artem'},
    ];
    vacancies: IVacancy[] = [
        {id: 1, name: 'Junior', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], date: new Date(), },
        {id: 2, name: 'Middle', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], date: new Date()},
        {id: 3, name: 'Senior', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], date: new Date()},
        {id: 4, name: 'Senior plus', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], date: new Date()},
    ];
    responses: IResponse[] = [
        {id: 1, applicantId: 1, vacancyId: 4, applicantName: 'Vlad', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
        {id: 2, applicantId: 2, vacancyId: 3, applicantName: 'Yuriy', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
        {id: 3, applicantId: 3, vacancyId: 2, applicantName: 'Valya', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
        {id: 4, applicantId: 4, vacancyId: 1, applicantName: 'Artem', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
    ];
    constructor() {
        makeAutoObservable(this);
    }

    addRecruiter(recruiter: IRecruiter) {
        this.recruiters.push(recruiter);
    }

    removeRecruiter(id: number) {
        this.recruiters = this.recruiters.filter((recruiter) => recruiter.id !== id);
    }

    addVacancy(vacancy: IVacancy) {
        this.vacancies.push(vacancy);
    }

    removeVacancy(id: number) {
        this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== id);
    }
}

export default new Company();