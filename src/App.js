import NavBar from './navigationBar/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import ContactMe from './components/ContactMe';
import { useState } from "react";
import Footer from './components/Footer';



export default function App() {
  const [isActive, setIsActive] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const handleOnClick = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <NavBar darkMode={darkMode} handleOnClick={handleOnClick} isActive={isActive} >
      <Home setIsActive={setIsActive}/>
      <About setIsActive={setIsActive}/>
      <Services setIsActive={setIsActive}/>
      <Tools setIsActive={setIsActive}/>
      <ContactMe darkMode={darkMode} isActive={isActive} setIsActive={setIsActive} />
      <Footer />
    </NavBar>
  );
};
