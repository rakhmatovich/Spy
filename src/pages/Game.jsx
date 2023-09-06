import React from 'react'
import { Link } from 'react-router-dom'

export default function Game() {
  return (
    <div className='flex flex-col h-screen bg-gradient-to-br from-gray-900 to-cyan-700  w-full items-center'>
      <h1 className='text-white w-full my-32  text-5xl text-center'>Выберите параметры</h1>

      <div className='w-[60%] flex justify-between'>
        <div className=''>
          <h1 className='m-3 text-zinc-100 text-center text-2xl'>Таймер</h1>
          <input className='bg-transparent/20 shadow-xl outline-none text-white p-3 rounded-lg' type="number" />
        </div>

        <div className=''>
          <h1 className='m-3 text-zinc-100 text-center text-2xl'>Игроки</h1>
          <input className='bg-transparent/20 shadow-xl outline-none text-white p-3 rounded-lg' type="number" />
        </div>
      </div>
      <div className='m-10 flex flex-col gap-5'>
        <div className='flex flex-col items-center mb-8'>
          <h1 className='m-3 text-zinc-100 text-center text-2xl'>Шпионов</h1>
          <input className='w-fit bg-transparent/20 shadow-xl outline-none text-white p-3 rounded-lg' type="number" />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full  grid-cols-1'>Все локации</button>
        <Link to={'/newgame'}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full  grid-cols-1'>Начать игру</button>
        </Link>
      </div>
    </div>
  )
}
