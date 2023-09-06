import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Countries from "./components//Countries"
import Sport from "./components//Sport"
import Travel from "./components//Travel"
import Cultures from "./components//Cultures"
import Children from "./components//Children"
import TimeMachine from "./components//TimeMachine"
import Game from "./pages/Game"
import Reference from "./pages/Reference"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game' element={<Game />} />
        <Route path='/reference' element={<Reference />} />
        <Route path='/settings' element={<Settings />} />
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
