import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';



const Quizes = () => {
    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)
    const quizes = useLoaderData();
    const quizesData = quizes.data;
    const { name, questions } = quizesData;
    useEffect(() => {
        const rightData = JSON.parse(localStorage.getItem('right-ans'));
        if (rightData) {
            setRight(rightData)
        }
    }, [])
    useEffect(() => {
        const wrongData = JSON.parse(localStorage.getItem('wrong-ans'));
        if (wrongData) {
            setWrong(wrongData)
        }
    }, [])
    const removeItem = () => {
        setRight(0);
        setWrong(0)
        localStorage.clear();
    }

    return (

        <div className='my-8'>
            <h1 className='text-4xl font-bold text-center underline'>Quizes Of {name}</h1>
            <div className='shadow-lg w-[80%] md:w-[40%] mx-auto my-5 p-5 border-2 flex flex-col md:flex-row items-center gap-3'>
                <h2 className='text-2xl font-bold mr-2'>Result:</h2>
                <h4 className='text-xl font-italic text-green-600 mr-2 border px-2'>Right Answer: <span className='font-bold'>{right}</span></h4>
                <h4 className='text-xl font-italic text-red-700 mr-2 border px-2'>Wrong Answer: <span className='font-bold'>{wrong}</span></h4>
                <button className='btn btn-primary' onClick={removeItem}>
                    Clear All
                </button>
            </div>
            <div className='grid md:grid-cols-2'>
                {
                    questions.map((quiz, idx) => <Quiz
                        key={quiz.id}
                        number={idx + 1}
                        quiz={quiz}
                        right={right}
                        wrong={wrong}
                        setRight={setRight}
                        setWrong={setWrong}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;