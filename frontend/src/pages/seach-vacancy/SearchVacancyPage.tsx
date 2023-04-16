import React, {useEffect, useState} from 'react';
import "./SearchVacansyPageStyle.css"
import PageTitle from "../../components/PageTitle/PageTitle";
import Label from "../../components/UI/Label/Label";
import company from "../../store/Company";
import VacancyItem from "../../components/VacancyBlock/VacancyItem/VacancyItem";
import {searchApi} from "../../API/seachApi";
import user from "../../store/User";

const SearchVacancyPage = () => {
    const [vacancyName, setVacancyName] = useState('')
    const [vacancies, setVacancies] = useState([])

    useEffect(() => {
        (async () => {
            const res = await searchApi.search(user.id);
            setVacancies(res.data.data);
        })()
    }, [])

    return (
        <div className="container">
            <PageTitle text="Поиск вакансий"/>
            <div className="searchContainer">
                <input type="search" placeholder="Какую специальность ищете?"
                       onChange={(event) =>
                           setVacancyName(event.target.value)}/>
                <button
                    // onClick={() => onSearchBtnClicked(vacancyName)}
                >Искать</button>
            </div>
            <div className="bottomContainer">
                <div className="searchFilters">
                    <Label text="Фильтры"/>
                    <h3>Регион и населенный пункт</h3>
                    <input type="search" placeholder="Ваш населенный пункт"/>
                    <div className="cCheckbox">
                        <input type="checkbox"/>
                        <label>Доступно для людей с инвалидностью</label>
                    </div>
                    <button>Сбросить</button>
                </div>
                <div className="foundVacanciesContainer">
                    <Label text="Найденные вакансии"/>
                    <div style={{width: '100%'}}>
                        {vacancies.map(vacancy => <VacancyItem vacancy={vacancy} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchVacancyPage;