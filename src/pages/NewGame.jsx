import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

export default function NewGame() {
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(false)
    const [player, setPlayer] = useState("")
    const [start, setStart] = useState(false)
    const [loading, setLoading] = useState(true)
    
    const navigate = useNavigate()

    let roles = JSON.parse(localStorage.getItem('roles'))

    useEffect(() => {
        if (!active && index <= roles.length) editPlayerRole()
        if (!active && index === roles.length) setStart(true)
    }, [active])

    function editPlayerRole()  {
        setIndex(index + 1)
        setTimeout(() => setPlayer(roles[index]), 200)
    }

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    if(loading) {
        return <Loading />
    }

    return (
        <div className='flex h-screen bg-gradient-to-br from-gray-900 to-cyan-700 items-center justify-center'>
            {!start ? <div className="box" onClick={() => {
                setActive(!active)
            }}>
                <div className={`box-inner ${active && 'rotate'}`}>
                    <div className='box-front'>
                        <div className='w-80 h-80 m-16 mx-auto bg-[url(/Favicon.ico)] bg-center bg-contain'></div>
                        <p className='text-3xl text-cyan-500'>Узнай, кто ты?</p>
                    </div>
                    <div className="box-back flex flex-row items-center justify-center">
                        <h2 className='text-3xl text-cyan-500'>{player}</h2>
                    </div>
                </div>
            </div> : ""}
            {start ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  w-44 h-44 rounded-full' onClick={() => navigate("/timer")}>Start</button> : ""}
        </div>
    )
}
