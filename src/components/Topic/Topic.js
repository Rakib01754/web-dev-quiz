import React from 'react';
import { NavLink } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic
    return (
        <div>
            <div className=" shadow-xl">
                <img src={logo} alt="topic" className='bg-gray-200' />
                <div className="card-body">
                    <h2 className="card-title justify-start">
                        {name}
                        <div className="badge badge-secondary">Hot</div>
                    </h2>
                    <p className='text-xl text-left'>{`All the ${name} Related Quiz Here`}</p>
                    <div className="card-actions justify-start flex items-center">
                        <div className="badge badge-outline">Total Quiz: {total}</div>
                        <NavLink to={`/quiz/${id}`}><button className="btn btn-outline btn-accent">Start Quiz</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;