import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ quiz }) => {
    const { correctAnswer, question, options } = quiz
    const notify = () => toast(`Answer: ${correctAnswer}`);
    return (
        <div className='border-2 w-[90%] mx-auto text-left mt-5 p-5 shadow-lg'>
            <div className='flex justify-between'>
                <p className='font-bold text-2xl mb-3'>{question}
                </p>
                <button title='click for correct answer' onClick={notify}>
                    <FontAwesomeIcon icon={faEye} />
                </button>
                <ToastContainer />

            </div>
            {
                options.map((option, idx) => <Options key={idx} option={option}></Options>)
            }
        </div>
    );
};

export default Quiz;