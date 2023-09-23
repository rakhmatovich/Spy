import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Result() {
    const roles = Array(JSON.parse(localStorage.getItem('roles')))
    localStorage.removeItem('roles')

    return (
        <>
            <div className='hidden md:flex'>
                <Navbar />
            </div>
            <div className='h-screen overflow-y-scroll bg-gradient-to-br from-gray-900 to-cyan-700 flex flex-col items-center justify-center'>
                {roles[0] &&
                    <div className='border w-80 md:w-96 border-cyan-900 max-h-[60vh] overflow-y-scroll rounded-lg bg-black/50 text-white text-2xl'>
                        <h1 className='text-3xl text-center m-3 border-b-2 border-cyan-900 pb-1'>Результаты</h1>
                        {roles[0]?.map((role, index) => (
                            <h1 className='py-3 px-6' key={index}>{index + 1}. {role}</h1>
                        ))}
                    </div>
                }
                <Link to="/">
                    <button className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-80 md:w-96 h-14 rounded-full grid-cols-1">
                        Главный меню
                    </button>
                </Link>
                <Link to="/game">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-80 md:w-96 h-14 rounded-full grid-cols-1">
                        Новая игра
                    </button>
                </Link>
            </div>
            <Footer />
        </>
    )
}
