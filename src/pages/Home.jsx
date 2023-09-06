import Buttons from "../components/Buttons"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Home() {

    return (
        <div className="h-screen bg-gradient-to-br from-gray-900 to-cyan-700 flex items-center justify-center">
            <Navbar/>
            <Buttons/>
            <Footer/>
        </div>
    )
}

export default Home
