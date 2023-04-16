import { AxiosInstance } from './axiosInstance';

class SearchApi {

    async search(id: number) {
        return await AxiosInstance.get(`/applicant/${id}/search`);
    }
}
export const searchApi = new SearchApi();