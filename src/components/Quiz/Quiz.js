import React from 'react';
import Options from '../Options/Options';

const Quiz = ({ quiz }) => {
    const { correctAnswer, question, options } = quiz
    return (
        <div className='border-2 w-[90%] mx-auto text-left mt-5 p-5'>
            <p className='font-bold text-2xl mb-3'>{question}</p>
            {
                options.map((option, idx) => <Options key={idx} option={option}></Options>)
            }
        </div>
    );
};

export default Quiz;