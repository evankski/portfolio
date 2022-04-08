// Import SSR caching image tag
import Image from "next/image";
import styles from '../styles/About.module.css'

function About() {
    return ( 
        <div>
            <h1>About Me</h1>

            <p className={styles.coolText}>Im a software Engineer. Hire me. Please?</p>

            {/* loading an image locally */}
            {/* an image tag would have also worked -- just no ServerSideRendering caching */}
            <Image 
                src="/vercel.svg"
                alt="the vercel logo"
                width={500}
                height={500}
            />

            <Image 
                src="https://placekitten.com/300/300"
                alt="pic of kitten"
                width={300}
                height={300}
            />
        </div>
     );
}

export default About;