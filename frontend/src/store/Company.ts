import {makeAutoObservable, observable} from "mobx";
import IRecruiter from "../models/IRecruiter";
import IResponse from "../models/IResponse";
import IVacancy from "../models/IVacancy";
import {workerData} from "worker_threads";

class Company {
    recruiters: IRecruiter[] = [
        // {id: 1, name: 'Vlad'},
        // {id: 2, name: 'Yuriy'},
        // {id: 3, name: 'Valya'},
        // {id: 4, name: 'Artem'},
    ];
    vacancies: IVacancy[] = [
        {id: 1, title: 'Junior', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], publish_date: new Date().toString()},
        {id: 2, title: 'Middle', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], publish_date: new Date().toString()},
        {id: 3, title: 'Senior', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], publish_date: new Date().toString()},
        {id: 4, title: 'Senior plus', description: 'Какое то описание', keySkills: ['Java', 'Spring', 'PostgreSQL'], publish_date: new Date().toString()},
    ];
    responses: IResponse[] = [
        {id: 1, applicantId: 1, vacancyId: 4, applicantName: 'Vlad', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
        {id: 2, applicantId: 2, vacancyId: 3, applicantName: 'Yuriy', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
        {id: 3, applicantId: 3, vacancyId: 2, applicantName: 'Valya', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
        {id: 4, applicantId: 4, vacancyId: 1, applicantName: 'Artem', vacancyName: 'Senior Java Developer', testResult: 100, date: new Date(), status: "+", comment: "Комментарий"},
    ];
    constructor() {
        makeAutoObservable(this, {
            vacancies: observable
        });
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

    setVacancies(vacancies: IVacancy[]) {
        this.vacancies = vacancies
    }

    updateVacancy(vacancyId: number, name: string, description: string) {
        this.vacancies = this.vacancies.map((vacancy) => {
            if (vacancy.id === vacancyId) {
                return {...vacancy, name, description}
            }
            return vacancy;
        })
    }

    removeVacancy(id: number) {
        this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== id);
    }

    setResponses(responses: IResponse[]) {
        this.responses = responses;
    }

    addKeySkill(vacancyId: number, keySkill: string) {
        this.vacancies = this.vacancies.map((vacancy) => {
            if (vacancy.id === vacancyId) {
                return {...vacancy, keySkills: [...vacancy.keySkills.slice(), keySkill]}
            }
            return vacancy;
        })
    }

    removeKeySkill(vacancyId: number, keySkill: string) {
        this.vacancies = this.vacancies.map((vacancy) => {
            if (vacancy.id === vacancyId) {
                return {...vacancy, keySkills: vacancy.keySkills.filter((skill) => skill !== keySkill)}
            }
            return vacancy;
        })
    }
}

export default new Company();