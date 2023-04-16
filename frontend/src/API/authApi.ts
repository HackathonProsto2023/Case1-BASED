import { AxiosInstance } from './axiosInstance';

class AuthApi {

    async registration(login: string, role: string) {
        return await AxiosInstance.post('/registration', {login, role});
    }
    async login(login: string, role: string) {
        return await AxiosInstance.post('/login', {login, role});
    }
}
export const authApi = new AuthApi();