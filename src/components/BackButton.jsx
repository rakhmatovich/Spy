import React from 'react';
import {useNavigate} from "react-router-dom";

function BackButton() {
    const navigate = useNavigate()
    return (
        <div className='absolute right-8 top-8' onClick={() => navigate(-1)}>
            <button
                className="border-2 border-gray-900 hover:bg-gray-950 text-white font-semibold py-2 px-4 rounded-full">
                ⏪ Back
            </button>
        </div>
    );
}

export default BackButton;