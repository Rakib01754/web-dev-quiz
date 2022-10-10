import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';



const Quizes = () => {
    const quizes = useLoaderData();
    const quizesData = quizes.data;
    const { name, questions } = quizesData;

    return (

        <div className='mt-8'>
            <h1 className='text-4xl font-bold text-center underline'>Quizes Of {name}</h1>
            {
                questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizes;