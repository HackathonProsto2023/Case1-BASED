import React, { useState } from 'react';
import "../profile-recruiter/ProfileRecruiterPageStyle.css"

const ProfileRecruiterPage = () => {
    const [responseCount, setResumesCount] = useState(0)
    function onMessageClicked() {

    }
    return (
        <div>
            <h1 style={{color: 'green'}}>Страница рекрутера</h1>
            <div>
                У вас {responseCount} непросмотренных резюме
                <button>Просмотреть резюме</button>
            </div>
        </div>
    );
};

export default ProfileRecruiterPage;