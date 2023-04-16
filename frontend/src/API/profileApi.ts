import { AxiosInstance } from './axiosInstance';

class ProfileApi {
    async update(id: number, name: string, description: string, city_id: number) {
        return await AxiosInstance.put(`/profile/${id}`, {name, description, city_id});
    }
}
export const profileApi = new ProfileApi();