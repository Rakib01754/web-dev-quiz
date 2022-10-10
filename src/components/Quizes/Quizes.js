import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizes = useLoaderData()
    const { name } = quizes.data

    return (

        <div className='mt-8'>
            <h1 className='text-4xl font-bold text-center underline'>Quizes Of {name}</h1>
        </div>
    );
};

export default Quizes;