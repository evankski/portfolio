// Import SSR caching image tag
import Image from "next/image";
import styles from '../styles/About.module.css'
import 'animate.css';
import Link from "next/link";

function About() {

    return ( 
        <div className="about" >
            <h1 className="animate__animated animate__fadeInDown">Hi, I'm <span className="evan">Evan.</span></h1>
            <h1 className="animate__animated animate__fadeInDown">I'm a full stack developer.</h1>
            <div className="about-links animate__animated animate__fadeInLeft">
                <a
                    href="#skills"
                    alt="Evan Karwowski resume"
                    className="resume"
                  >
                    Skills
                  </a>
                <a
                    href="#projects"
                    alt="Evan Karwowski resume"
                    className="resume"
                  >
                    Projects
                  </a>
                <a
                    href="#about"
                    alt="Evan Karwowski resume"
                    className="resume"
                  >
                    About
                  </a>
                <a
                    href="#contact"
                    alt="Evan Karwowski resume"
                    className="resume"
                  >
                    Contact
                  </a>
            </div>
                 
        </div>
     );
}

export default About;