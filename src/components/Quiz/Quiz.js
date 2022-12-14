import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Quiz = ({ quiz, setWrong, setRight, wrong, right, number }) => {
    const { correctAnswer, question, options, id } = quiz
    const notify = () => toast(`Answer: ${correctAnswer}`);
    return (
        <div className='border-2 w-[90%] mx-auto text-left mt-5 p-5 shadow-lg'>
            <div>
                <div className='flex justify-between'>
                    <p className='font-bold text-xl mb-3'>({number}). {question.replace('<p>', '').replace('</p>', '')}
                    </p>
                    <button title='click for correct answer' onClick={notify}>
                        <FontAwesomeIcon icon={faEye} className='text-xl' />
                    </button>
                </div>
                <ToastContainer />

            </div>
            <div className='grid md:grid-cols-2'>
                {
                    options.map((option, idx) => <Options key={idx} option={option} correctAnswer={correctAnswer}
                        right={right}
                        wrong={wrong}
                        number={idx + 1}
                        setRight={setRight}
                        setWrong={setWrong}
                        id={id}

                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Quiz;