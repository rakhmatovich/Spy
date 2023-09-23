import React from 'react';
import {useNavigate} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"

function BackButton() {
    const navigate = useNavigate()
    return (
        <div className='absolute right-8 top-8' onClick={() => navigate(-1)}>
            <button
                className="border-2 border-gray-900 hover:bg-gray-950 text-white font-semibold flex items-center py-2 px-4 rounded-full ">
               <IoIosArrowBack/> <span className='mx-1'>Back</span>
            </button>
        </div>
    );
}

export default BackButton;