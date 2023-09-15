import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Countries from "./pages/settings/Countries.jsx"
import Sport from "./pages/settings/Sport.jsx"
import Travel from "./pages/settings/Travel.jsx"
import Cultures from "./pages/settings/Cultures.jsx"
import Children from "./pages/settings/Children.jsx"
import Game from "./pages/Game"
import Reference from "./pages/Reference"
import NewGame from "./pages/NewGame.jsx"
import Timer from "./components/Timer"
import {useEffect, useState} from "react";
import Result from "./components/Result"
import Loading from "./components/Loading"

const initialSettings = [
    {id: 1, name: 'Страны', status: true},
    {id: 2, name: 'Спорт', status: true},
    {id: 3, name: 'Путешествия', status: true},
    {id: 4, name: 'Культура', status: true},
    {id: 5, name: 'Дети', status: true},
]

function App() {
    const [settings, setSettings] = useState(JSON.parse(localStorage.getItem('settings')) || initialSettings)

    const [timer, setTimer] = useState(1)
    const [playersCount, setPlayersCount] = useState(3)
    const [spyCount, setSpyCount] = useState(1)

    useEffect(() => {
        let json = JSON.stringify(settings)
        localStorage.setItem('settings', json)
    }, [settings]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/game' element={
                    <Game
                        setTimer={setTimer}
                        playersCount={playersCount}
                        spyCount={spyCount}
                        setPlayersCount={setPlayersCount}
                        setSpyCount={setSpyCount}
                        settings={settings}
                    />
                }/>
                <Route path='/reference' element={<Reference/>}/>
                <Route path='/settings' element={<Settings settings={settings} setSettings={setSettings}/>}/>
                <Route path='/newgame' element={
                    <NewGame />
                }/>
                <Route path='/countries' element={<Countries/>}/>
                <Route path='/sport' element={<Sport/>}/>
                <Route path='/travel' element={<Travel/>}/>
                <Route path='/cultures' element={<Cultures/>}/>
                <Route path='/children' element={<Children/>}/>

                <Route path='/timer' element={<Timer seconds={timer*60}/>}/>
                <Route path="/results" element={<Result />} />
                <Route path='/loading' element={<Loading />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
