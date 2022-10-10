import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    let error = useRouteError();
    const { status, statusText } = error;
    return (
        <div className='mt-52'>
            <h1 className='text-6xl mb-2'>Ooops!!!</h1>
            <h1 className='text-5xl font-bold mb-2'>Error <span className='text-red-700'>{status}</span></h1>
            <p className='text-2xl font-bold mb-2'>{statusText}</p>
            <NavLink to='/home'><button className="btn btn-error mt-5">Go to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;