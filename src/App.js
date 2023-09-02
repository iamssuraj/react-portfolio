import "./App.css";
import Extracurricular from "./components/Extracurricular/Extracurricular.js";
import Education from "./components/Education/Education.js";
import Projects from "./components/Projects/projects.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import VolunteerExp from "./components/VolunteerExp/VolunteerExp";
import { useState } from 'react';
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import ScrollToTop from "react-scroll-to-top";


function App() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div className="gradient__bg">
        <div className="navbar">
          <div className="navbar-links">
            <div className="navbar-links_container">
              <p><a href='#home'>Home</a></p>
              <p><a href='#experience'>Experience</a></p>
              <p><a href='#education'>Education</a></p>
              <p><a href='#projects'>Projects</a></p>
              <p><a href='#certifications'>Certifications</a></p>
              <p><a href='#extracurriculars'>Extracurriculars</a></p>
              <p><a href='#volunteer'>Volunteer Experience</a></p>
              <p><a href='#contact'>Contact</a></p>
            </div>

            <div className="navbar-wrapper">
              <div className="navbar-menu">
                {toggleMenu
                  ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                  : <RiMenuFill color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                  <div className="navbar-menu_container scale-up-center">
                    <div className="navbar-menu_container-links">
                      <p><a href='#home'>Home</a></p>
                      <p><a href='#experience'>Experience</a></p>
                      <p><a href='#education'>Education</a></p>
                      <p><a href='#projects'>Projects</a></p>
                      <p><a href='#certifications'>Certifications</a></p>
                      <p><a href='#extracurriculars'>Extracurriculars</a></p>
                      <p><a href='#volunteer'>Volunteer Experience</a></p>
                      <p><a href='#contact'>Contact</a></p>
                    </div>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>
        <Header />
      </div>
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Extracurricular />
      <VolunteerExp />
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
