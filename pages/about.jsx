// Import SSR caching image tag
import Image from "next/image";
import styles from '../styles/About.module.css'

function About() {

    return ( 
        <div className="about">
            <h1>Hi, I'm <span className="evan">Evan.</span></h1>
            <h1>I'm a full stack developer.</h1>
            <div className="about-links">
                <a
                    href="/documents/Evan-Karwowski-Resume.pdf"
                    target="_blank"
                    alt="Evan Karwowski resume"
                    rel="noopener noreferrer"
                    className="resume"
                  >
                    Resume
                  </a>
                <a
                    href="/documents/Evan-Karwowski-Resume.pdf"
                    target="_blank"
                    alt="Evan Karwowski resume"
                    rel="noopener noreferrer"
                    className="resume"
                  >
                    Resume
                  </a>
                <a
                    href="/documents/Evan-Karwowski-Resume.pdf"
                    target="_blank"
                    alt="Evan Karwowski resume"
                    rel="noopener noreferrer"
                    className="resume"
                  >
                    Resume
                  </a>
                <a
                    href="/documents/Evan-Karwowski-Resume.pdf"
                    target="_blank"
                    alt="Evan Karwowski resume"
                    rel="noopener noreferrer"
                    className="resume"
                  >
                    Resume
                  </a>
            </div>
                 
        </div>
     );
}

export default About;