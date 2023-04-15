import React from 'react';
import RecruiterItem from "../RecruiterItem/RecruiterItem";
import company from "../../../store/Company";
import {observer} from "mobx-react-lite";

const RecruiterList = observer(() => {
    return (
        <div>
            {company.recruiters.length
                ? company.recruiters.map((recruiter) => <RecruiterItem key={recruiter.id} recruiter={recruiter}/>)
                : 'Зарегистрируйте рекрутера'
            }
        </div>
    );
});

export default RecruiterList;