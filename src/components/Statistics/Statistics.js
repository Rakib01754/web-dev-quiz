import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    return (

        <div className='mb-48'>
            <h1 className='font-bold text-3xl underline my-5'>Number Of Quizzes</h1>
            <ResponsiveContainer width={'70%'} height={300} className='mx-auto'>
                <BarChart width={600} height={300} data={data.data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#8884d8" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Statistics;