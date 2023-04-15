import React from 'react';
import ResponseItem from "../ResponseItem/ResponseItem";
import Label from "../UI/Label/Label";
import company from "../../store/Company";
import {observer} from "mobx-react-lite";

const ResponseList = observer(() => {
    return (
        <div>
            <Label text={'Отклики'}/>
            {company.responses.map((response) => <ResponseItem
                response={response}
            />)}
        </div>
    );
});

export default ResponseList;