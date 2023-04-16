import React, {useEffect, useState} from 'react';
import ResponseItem from "../ResponseItem/ResponseItem";
import Label from "../UI/Label/Label";
import company from "../../store/Company";
import {observer} from "mobx-react-lite";
import IResponse from "../../models/IResponse";
import {companyApi} from "../../API/companyApi";

const ResponseList = observer(() => {
    const [filter, setFilter] = useState<number>(0);
    const [responses, setResponses] = useState<IResponse[]>(company.responses)

    useEffect(() => {
        (async () => {
            const res = await companyApi.getResponses(filter);
            const viewResponses = company.responses.filter((response) => {
                if (filter) {
                    return response.vacancyId === filter
                } else {
                    return true;
                }
            });
            setResponses(viewResponses);
        })();
    }, [filter])

    return (
        <div>
           <div className={'flex'} style={{margin: '0 0 10px 0'}}>
               <Label text={'Отклики'}/>
               <select onChange={(event) => setFilter(+event.target.value)}>
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