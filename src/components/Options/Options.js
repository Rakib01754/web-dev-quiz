import React from 'react';
import Swal from 'sweetalert2'

const Options = ({ option, correctAnswer }) => {

    return (
        <div className='flex px-5'>
            <button className='text-xl border-black border mb-2 px-2 rounded-md bg-gray-100 text-black hover:bg-yellow-500 hover:text-white' onClick={() => {
                if (option === correctAnswer) {

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Answer Is Correct",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Not Correct..Try Again",
                        timer: 1500,
                    });
                }
            }}>{option}</button>
        </div>
    );
};

export default Options;