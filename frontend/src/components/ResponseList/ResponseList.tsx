import React, {useEffect, useState} from 'react';
import ResponseItem from "../ResponseItem/ResponseItem";
import Label from "../UI/Label/Label";
import company from "../../store/Company";
import {observer} from "mobx-react-lite";
import IResponse from "../../models/IResponse";

const ResponseList = observer(() => {
    const [filter, setFilter] = useState<number>(0);
    const [responses, setResponses] = useState<IResponse[]>(company.responses)

    useEffect(() => {
        const viewResponses = company.responses.filter((response) => {
            if (filter) {
                return response.vacancyId === filter
            } else {
                return true;
            }
        });
        setResponses(viewResponses);
    }, [filter])

    return (
        <div>
           <div className={'flex'} style={{margin: '0 0 10px 0'}}>
               <Label text={'Отклики'}/>
               <select onChange={(event) => setFilter(+event.target.value)}>
                   <option value={0}>Все</option>
                   {company.vacancies.map((vacancy) => <option value={vacancy.id}>{vacancy.title}</option>)}
               </select>
           </div>
            {responses.map((response) => <ResponseItem
                response={response}
            />)}
        </div>
    );
});

export default ResponseList;