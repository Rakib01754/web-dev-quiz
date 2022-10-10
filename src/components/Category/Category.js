import React from 'react';
import Topic from '../Topic/Topic';

const Category = ({ topics }) => {
    console.log(topics)

    return (
        <div className='my-8'>
            <h2 className='text-4xl font-bold'>What would you like to practise today?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-5'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Category;