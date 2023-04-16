import {makeAutoObservable} from "mobx";
import ICity from "../models/ICity";

class City {
    cities: ICity[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setCity(cities: ICity[]) {
        this.cities = cities;
    }
}

export default new City()