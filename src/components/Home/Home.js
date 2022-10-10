import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>
            <div className='w-[80%] mx-auto mt-8'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2018/09/18/17/27/questions-3686724_960_720.png" alt="iq" className='w-80' />
                    </div>
                    <div>
                        <p className='font-bold text-4xl ml-3'>
                            Try to answer those quizzes,Prepare for your Interview.
                        </p>
                        <br />
                        <p>
                            On Web Dev-Quiz you will find lots of free quiz tests and materials to help you improve your quiz skills and be more prepared for your Interview. If you don't know your level, you can start by taking a Quiz Test.
                        </p>

                    </div>
                </div>

            </div>
            <div className='px-8'>
                <Category topics={topics.data}></Category>
            </div>
        </div>
    );
};

export default Home;