import React from 'react';

const HomePage = () => {
    return (
        <div className={'flex'} style={{width: '100%', justifyContent: 'center'}}>
            <div className={'flex_column'} style={{alignItems: 'center', margin: '150px 0 0 0'}}>
                <h1 style={{color: 'green', fontSize: '72px'}}>Кейс 1:</h1>
                <h2 style={{color: 'gray', fontSize: '48px', width: '700px', textAlign: 'center'}}>Разработка цифровых инструментов для оптимизации процесса подбора персонала</h2>
            </div>
        </div>
    );
};

export default HomePage;