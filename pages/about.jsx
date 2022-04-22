// Import SSR caching image tag
import Image from "next/image";
import styles from '../styles/About.module.css'

function About() {
    return ( 
        <div>
            <h1>About Me</h1>

            {/* <p className={styles.coolText}>Im a software Engineer. Hire me. Please?</p> */}

            <img src="https://media-exp1.licdn.com/dms/image/C5603AQE1c7YIkpYRgA/profile-displayphoto-shrink_400_400/0/1640053888076?e=1655337600&v=beta&t=PuNo7y3kc0e8NEmJz6Y_PV-0zgzrTUnshdcRBULL9LI" alt="picture of evan" width={'30%'} style={{borderRadius: 400/ 2}}/>

            <p>I am a Software Engineer and a Real Estate Agent who thrives in high pressure situations. Having helped build a Real Estate company from the ground up, I enjoy teaching myself new and complex ideas. When working with a team, I’m never afraid to tackle any challenge thrown my way.</p>

            {/* loading an image locally */}
            {/* an image tag would have also worked -- just no ServerSideRendering caching */}
            {/* <Image 
                src="/vercel.svg"
                alt="the vercel logo"
                width={500}
                height={500}
            /> */}
            <div>
                {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a> */}
            </div>
        </div>
     );
}

export default About;