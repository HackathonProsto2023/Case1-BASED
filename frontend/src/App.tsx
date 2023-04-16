import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import ProfileApplicantPage from "./pages/profile-applicant/ProfileApplicantPage";
import SearchVacancyPage from "./pages/seach-vacancy/SearchVacancyPage";
import VacancyPage from "./pages/vakancy/VacancyPage";
import TestPage from "./pages/test/TestPage";
import ProfileRecruiterPage from "./pages/profile-recruiter/ProfileRecruiterPage";
import SearchApplicantPage from "./pages/seach-applicant/SearchApplicantPage";
import ApplicantPage from "./pages/applicant/ApplicantPage";
import './App.css';
import ProfileVacancyPage from "./pages/profile-vacancy/ProfileVacancyPage";
import user from "./store/User";
import HomePage from "./pages/HomePage/HomePage";
import {observer} from "mobx-react-lite";
import {cityApy} from "./API/cityApy";
import city from "./store/City";

const App = observer(() => {

    useEffect(  () => {
        (async () => {
            const res = await cityApy.get();
            city.setCity(res.data.data);
        })()
    }, [])

  return (
      <Layout>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />

          {user.role === 'applicant'
              ?
              <Route path="applicant" >
                <Route path="profile" element={<ProfileApplicantPage/>} />
                <Route path="search" element={<SearchVacancyPage/>} />
                <Route path="vacancy/:id" element={<VacancyPage/>} />
                <Route path="vacancy/:id/test" element={<TestPage/>} />
              </Route>
              : null
          }

          {
            user.role === 'recruiter' || user.role === 'company'
                ?
                <Route path="recruiter">
                  <Route path="profile" element={<ProfileRecruiterPage/>} />
                  <Route path="vacancy/:id" element={<ProfileVacancyPage/>} />
                  <Route path="seach" element={<SearchApplicantPage/>} />
                  <Route path="applicant/:id" element={<ApplicantPage/>} />
                </Route>
                : null
           }

           <Route path={'*'} element={<h1 style={{color: 'red'}}>Страница не найдена</h1>}/>
        </Routes>
      </Layout>
  );
});

export default App;
