import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Countries from "./pages/settings/Countries.jsx"
import Sport from "./pages/settings/Sport.jsx"
import Travel from "./pages/settings/Travel.jsx"
import Cultures from "./pages/settings/Cultures.jsx"
import Children from "./pages/settings/Children.jsx"
import TimeMachine from "./pages/settings/TimeMachine.jsx"
import Game from "./pages/Game"
import Reference from "./pages/Reference"
import NewGame from "./pages/NewGame.jsx"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game' element={<Game />} />
        <Route path='/reference' element={<Reference />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/newgame' element={< NewGame />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/sport' element={<Sport />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/cultures' element={<Cultures />} />
        <Route path='/children' element={<Children />} />
        <Route path='/timemachine' element={<TimeMachine />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
