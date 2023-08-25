import React from 'react'

export default function Buttons() {
    return (
        <div className='flex flex-col gap-5 w-full h-[90vh`] items-center justify-center'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                New game
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full  grid-cols-1">
                Option
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                Reference
            </button>
        </div>
    )
}
