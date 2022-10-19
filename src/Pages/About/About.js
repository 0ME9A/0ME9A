import About from "../../Components/About/About"
import Skills from "../../Components/Skills/Skills"
import Contact from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import Menu from "../../Components/Menu/Menu"
const AboutUs=()=>{
    return(
        <>
            {/* <Menu/> */}
            <About hideShow={'none'}/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default AboutUs