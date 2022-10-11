import React from 'react';
import Swal from 'sweetalert2'

const Options = ({ option, correctAnswer }) => {

    return (
        <div className='flex px-5'>
            <button className='text-xl border-black border-2  mb-2 p-2 bg-gray-200 text-black hover:bg-yellow-500 hover:text-white' onClick={() => {
                if (option === correctAnswer) {

                    Swal.fire('Yayy!!! Answer is Correct.')
                }
                else {
                    Swal.fire('Opps! Answer is Wrong.')
                }
            }}>{option}</button>
        </div>
    );
};

export default Options;