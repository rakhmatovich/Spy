import React, { useEffect, useState } from 'react'
import BackButton from "../components/BackButton.jsx";
import { countryNames } from '../utils/words.js';

export default function NewGame({settings, timer, playersCount, spyCount}) {
    const [roles, setRoles] = useState(["You are Spy", "Simple", "Simple", "You are Spy", "Simple","You are Spy","You are Spy", "Simple"])
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(false)
    const [player, setPlayer] = useState("")

    const editPlayerRole = () => {
        setIndex(index + 1)
        setTimeout(() => setPlayer(roles[index]), 200)
    }

    useEffect(() => {
        if(!active && index < roles.length) editPlayerRole()
    }, [active])

    

    return (
        <div className='flex h-screen bg-gradient-to-br from-gray-900 to-cyan-700 items-center justify-center'>
            <div className="box" onClick={() => {
                setActive(!active)
            }}>
                <div className={`box-inner ${active && 'rotate'}`}>
                    <div className='box-front'>
                        <div className='w-80 h-80 m-16 mx-auto bg-[url(/Favicon.ico)] bg-center bg-contain'></div>
                        <p className='text-3xl text-cyan-500'>Find out who you are?</p>
                    </div>
                    <div className="box-back flex flex-row items-center justify-center">
                        <h2 className='text-3xl text-cyan-500'>{player}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
