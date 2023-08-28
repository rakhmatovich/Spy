import React from 'react'

export default function Buttons() {
    return (
        <div className='flex pt-[24vh] pb-[30vh] flex-col gap-7 w-full items-center justify-center'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                Новая игра
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full  grid-cols-1">
                Настройки
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                Справка
            </button>
        </div>
    )
}
