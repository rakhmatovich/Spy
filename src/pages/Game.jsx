import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import BackButton from "../components/BackButton.jsx";

export default function Game({setTimer, playersCount, setPlayersCount, setSpyCount}) {


    const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const players = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [spySelect, setSpySelect] = useState([1])

    useEffect(() => {
        let fillArr = []
        for (let i = 0; i < Math.round(playersCount * 0.444); i++) {
            fillArr.push(i + 1)
        }
        setSpySelect(fillArr)
    }, [playersCount]);

    return (
        <div className='flex flex-col h-screen bg-gradient-to-br from-gray-900 to-cyan-700  w-full items-center'>
            <BackButton/>
            <h1 className='text-white w-full mt-24 mb-10 md:my-32 text-3xl md:text-5xl text-center'>Выберите
                параметры</h1>
            <div className='w-[60%] flex justify-between flex-col md:flex-row'>
                <div className="flex flex-col items-center">
                    <h1 className='m-3 text-zinc-100 text-center text-2xl'>Таймер</h1>
                    <select
                        onChange={(e) => setTimer(+e.target.value)}
                        className="w-[250px] bg-transparent/20 shadow-xl outline-none text-white p-3 pr-5 rounded-lg">
                        {times.map(t => (
                            <option value={t} key={t}>{t} min</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className='m-3 text-zinc-100 text-center text-2xl'>Игроки</h1>
                    <select
                        onChange={(e) => setPlayersCount(+e.target.value)}
                        className="w-[250px] bg-transparent/20 shadow-xl outline-none text-white p-3 pr-5 rounded-lg">
                        {players.map(t => (
                            <option value={t} key={t}>{t}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className=' flex flex-col gap-5'>
                <div className='flex flex-col items-center mb-8'>
                    <h1 className='m-3 text-zinc-100 text-center text-2xl'>Шпионов</h1>
                    <select id='select'
                            onChange={(e) => setSpyCount(+e.target.value)}
                            className="w-[250px] bg-transparent/20 shadow-xl outline-none text-white p-3 pr-5 rounded-lg">
                        {spySelect.map(t => (
                            <option value={t} key={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <Link to={'/settings'}>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-80 h-14 rounded-full  grid-cols-1'>
                        Все локации
                    </button>
                </Link>
                <Link to={'/newgame'}>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-80 h-14 rounded-full  grid-cols-1'>
                        Начать игру
                    </button>
                </Link>
            </div>
        </div>
    )
}
