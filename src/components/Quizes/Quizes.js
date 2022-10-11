import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';



const Quizes = () => {
    const quizes = useLoaderData();
    const quizesData = quizes.data;
    const { name, questions } = quizesData;

    return (

        <div className='my-8'>
            <h1 className='text-4xl font-bold text-center underline'>Quizes Of {name}</h1>
            <div className='grid md:grid-cols-2'>
                {
                    questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;