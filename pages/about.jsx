// Import SSR caching image tag
import Image from "next/image";
import styles from '../styles/About.module.css'

function About() {
    return ( 
        <div>
            <h1 className="evan-karwowski">Evan Karwowski</h1>

            {/* <p className={styles.coolText}>Im a software Engineer. Hire me. Please?</p> */}
            <div className="about">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQE1c7YIkpYRgA/profile-displayphoto-shrink_400_400/0/1640053888076?e=1655337600&v=beta&t=PuNo7y3kc0e8NEmJz6Y_PV-0zgzrTUnshdcRBULL9LI" alt="picture of evan" width={'25%'} style={{borderRadius: 400/ 2}}/>

                <p className="about-paragraph">I am a Software Engineer and a Real Estate Agent who thrives in high pressure situations. Having helped build a Real Estate company from the ground up, I enjoy teaching myself new and complex ideas. When working with a team, I’m never afraid to tackle any challenge thrown my way.</p>
            </div>

            <button className="resume-button" onClick={() => download()}> Resume </button>

            <a href="/Evan-Karwowski-Resume.pdf">test</a>
        </div>
     );
}

export default About;