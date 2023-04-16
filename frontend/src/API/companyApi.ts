import { AxiosInstance } from './axiosInstance';

class CompanyApi {
    async addVacancy(id: number, title: string, description: string) {
        return await AxiosInstance.post(`/company/${id}/vacancy`, {title, description});
    }

    async getVacancy(id: number) {
        return await AxiosInstance.get(`/company/vacancy/${id}`);
    }

    async updateVacancy(id: number, title: string, description: string, company_id: number) {
        return await AxiosInstance.put(`/company/vacancy/${id}`, {title, description, company_id});
    }

    async getVacancies(id: number) {
        return await AxiosInstance.get(`/company/${id}/vacancies`);
    }

    async getResponses(id: number) {
        return await AxiosInstance.get(`/company/vacancy/${id}/responses`);
    }   
}
export const companyApi = new CompanyApi();