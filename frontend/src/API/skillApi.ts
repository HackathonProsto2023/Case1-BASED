import { AxiosInstance } from './axiosInstance';

class SkillApi {
    async addSkillToApplicant(id: number, role: string, skill_name: string) {
        return await AxiosInstance.post(`/skill/applicant`, {skill_: {skill_name, id}, role});
    }

    async removeSkillFromApplicant(id: number, role: string, skill_name: string) {
        return await AxiosInstance.post(`/skill/applicant/delete`, {skill_: {skill_name, id}, role});
    }

    async addSkillToVacancy(id: number, role: string, skill_name: string) {
        return await AxiosInstance.post(`/skill/vacancy/`, {skill_: {skill_name, id}, role});
    }

    async removeSkillFromVacancy(id: number, role: string, skill_name: string) {
        return await AxiosInstance.post(`/skill/vacancy/delete`, {skill_: {skill_name, id}, role});
    }
}
export const skillApi = new SkillApi();