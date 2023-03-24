import Navbar from "./Scenes/Navbar"
import Landing from "./Scenes/Landing"
import DotGroup from "./Scenes/DotGroup";
import MySkills from "./Scenes/MySkills";
import Projects from "./Scenes/Projects";
import Contact from "./Scenes/Contact";
import Footer from "./Scenes/Footer";
import LineGradient from "./Components/LineGradient";
import { useState,  useEffect  } from "react";
import useMediaQuery from "./Hooks/useMediaQuery";


function App() {
  const[selectedPage, setSelectedPage] = useState('home');
  const[isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  })

  return <div className="app bg-deep-blue">
    <Navbar
      isTopOfPage={isTopOfPage} 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} />
      <div 
      className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
    <DotGroup 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
        )}
    <Landing 
    setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
                <MySkills />
                <LineGradient />
               </div>   
                         
               <div className="w-5/6 mx-auto">
                <Projects />
                </div>
                <LineGradient />
                <div className="w-5/6 mx-auto">
                <Contact />
               </div>
               
                <Footer />
             
              
      </div>;
}

export default App;
