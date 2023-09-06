import React, {useState} from 'react'
import BackButton from "../components/BackButton.jsx";

export default function NewGame() {
    const [isSpy, setIsSpy] = useState(false)

    const testing = () => {
        setIsSpy(!isSpy)
    }

    return (
        <div className='flex h-screen bg-gradient-to-br from-gray-900 to-cyan-700 items-center justify-center'>
            <BackButton/>
            <div
                onClick={testing}
                className='w-[20%] backdrop-blur-xl min-w-[300px] h-[70vh] border-4 rounded-2xl border-gray-900 shadow-2xl p-20 flex items-center justify-center'>
                <h1 className='text-cyan-500 text-2xl text-center select-none'>
                    {isSpy ? "You are a Spy" : "Miami"}
                </h1>
            </div>
        </div>
    )
}
