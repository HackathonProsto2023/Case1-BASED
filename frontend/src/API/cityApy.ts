import { AxiosInstance } from './axiosInstance';

class CityApy {
    async get() {
        return await AxiosInstance.get('/all_cities');
    }
}
export const cityApy = new CityApy();