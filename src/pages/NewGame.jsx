import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { countryNames, sportNames, travelNames, culturesNames, childrenNames } from '../utils/words.js';

export default function NewGame({settings, playersCount=3, spyCount=1}) {
    const navigate = useNavigate()

    let allWords = []
    let roles = []

    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(false)
    const [player, setPlayer] = useState("")
    const [start, setStart] = useState(false)
    const [randomItem, setRandomItem] = useState("")

    if(settings[0].status) allWords = [...allWords, ...countryNames]
    if(settings[1].status) allWords = [...allWords, ...sportNames]
    if(settings[2].status) allWords = [...allWords, ...travelNames]
    if(settings[3].status) allWords = [...allWords, ...culturesNames]
    if(settings[4].status) allWords = [...allWords, ...childrenNames]

    for(let j=0; j<spyCount; j++){
        roles.push("You are Spy")
    }
    if(randomItem) for(let i=0; i < playersCount; i++){
        roles.push(randomItem)
    }

    const editPlayerRole = () => {
        setIndex(index + 1)
        setTimeout(() => setPlayer(roles[index]), 200)
    }

    useEffect(() => {
        if(!active && index <= roles.length) editPlayerRole()
        if(!active && index === roles.length) setStart(true)
    }, [active])

    useEffect(() => {
        setRandomItem(allWords[Math.floor(Math.random() * allWords.length)].name)
    }, [])

    return (
        <div className='flex h-screen bg-gradient-to-br from-gray-900 to-cyan-700 items-center justify-center'>
            {!start ? <div className="box" onClick={() => {
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
            </div> : ""}
            {start ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  w-96 h-14 rounded-full' onClick={() => navigate("/timer")}>Start</button> : ""}
        </div>
    )
}
