import React from 'react';
import RecruiterItem from "../RecruiterItem/RecruiterItem";
import company from "../../../store/Company";
import {observer} from "mobx-react-lite";

const RecruiterList = observer(() => {
    return (
        <div>
            {company.recruiters.map((recruiter) => <RecruiterItem recruiter={recruiter}/>)}
        </div>
    );
});

export default RecruiterList;