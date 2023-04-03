import React from 'react';
import Beggining from './Beggining/Beggining';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Cv from './Cv/Cv';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
    return ( 
      <div className=' bg-black'>
        <section className='min-h-screen font-myFont'>
        <header>
            <Nav />
        </header>
        <main>
             <div className="text-white mt-[50%] sm:mt-[25%] lg:mt-[12%]">
            <Beggining />
            <div className="mx-auto mt-[50%] w-[15%] animate-bounce sm:mt-[25%] lg:mt-[10%]">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
              >
                <img
                alt="img not found"
                  src="/arrow.png"
                  className="w-[50%] mx-auto cursor-grab sm:w-[35%] sm:mx-auto lg:w-[20%] lg:mx-auto"
                />
              </Link>
            </div>
          </div>
          <div className="mt-[60%] text-white text-2xl lg:mt-[18%]" id="skills">
            <h2 className="text-center mb-10">SKILLS</h2>
            <Skills />
          </div>
          <div
            className="mt-[60%]  text-white font-light lg:mt-[10%]"
            id="proyectos"
          >
            <h2 className="text-center mb-10 text-2xl">PROYECTOS</h2>
            <p className="text-center mb-5 underline">
              «Desliza hacia los lados»
            </p>
            <Projects />
          </div>
          <div className="mt-[80%] lg:mt-[18%]" id="cv">
            <Cv />
          </div>
        </main>
        </section>
          <footer id="contacto">
            <Footer/>
          </footer>
      </div>
     );
}
 
export default Home;