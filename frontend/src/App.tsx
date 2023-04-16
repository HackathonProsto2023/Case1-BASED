import React from 'react';
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

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />

          <Route path="applicant" >
            <Route path="profile" element={<ProfileApplicantPage/>} />
            <Route path="search" element={<SearchVacancyPage/>} />
            <Route path="vaсancy/:id" element={<VacancyPage/>} />
            <Route path="vaсancy/:id/test" element={<TestPage/>} />
          </Route>

          <Route path="recruiter">
            <Route path="profile" element={<ProfileRecruiterPage/>} />
            <Route path="vacancy/:id" element={<ProfileVacancyPage/>} />
            <Route path="seach" element={<SearchApplicantPage/>} />
            <Route path="applicant/:id" element={<ApplicantPage/>} />
          </Route>
        </Routes>
      </Layout>
  );
}

export default App;
