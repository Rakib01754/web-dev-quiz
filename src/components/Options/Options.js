import React from 'react';

const Options = ({ option }) => {
    return (
        <div className='flex px-5'>
            <input type="radio" name="radio-4" className="radio mr-2" />
            <p className='text-xl'>{option}</p>
        </div>
    );
};

export default Options;