import React from 'react';
import Swal from 'sweetalert2'

const Options = ({ option, correctAnswer, setWrong, setRight, wrong, right, number, id }) => {

    return (
        <div className='flex px-5 items center'>
            <input type="radio" name={id} className="radio mr-2" id={option}
                onClick={() => {
                    if (option === correctAnswer) {

                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Your Answer Is Correct",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        setRight(right + 1)
                        localStorage.setItem('right-ans', right + 1)
                    }
                    else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Not Correct..Try Again",
                            timer: 1500,
                        });
                        setWrong(wrong + 1)
                        localStorage.setItem('wrong-ans', wrong + 1)
                    }
                }} />
            <label for={option} className='w-[100%] text-xl border-black border mb-2 py-2 px-2 rounded-md bg-gray-100 text-black hover:bg-yellow-500 hover:text-white'>({number}). {option}</label>
        </div>
    );
};

export default Options;