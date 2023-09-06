import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Game from "./pages/Game"
import Reference from "./pages/Reference"
import NewGame from "./components/NewGame"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game' element={<Game />} />
        <Route path='/reference' element={<Reference />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='newgame' element={< NewGame />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
