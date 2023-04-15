import React from 'react';
import Label from "../UI/Label/Label";

interface props {
    text: string;
}

const PageTitle = ({text}: props) => {
    return (
        <div className={'flex_column'} style={{margin: '0 0 10px 0', alignItems: 'center'}}>
            <Label text={text}/>
            <hr style={{height: '3px', width: '100%', backgroundColor: 'green'}}/>
        </div>
    );
};

export default PageTitle;