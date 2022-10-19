import Home from "../../Components/Home/Home"
import About from "../../Components/About/About"
import Portfolio from "../../Components/Portfolio/Portfolio"
import Contact from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"

function HomePage() {
    return (
        <div className='main-container'>
            <Home />
            <About hideShow={"display: none"}/>
            <Portfolio cardsParent="home"/>
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage