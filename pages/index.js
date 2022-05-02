import Head from 'next/head'
import About from './about'
import Skills from './skills'
import Navbar from '../components/navbar'
import Projects from './projects'
import Contact from './contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Evan Karwowski Portfolio</title>
        <meta name="description" content="Portfolio website created by Evan Karwowski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        {/* © Evan {new Date().getFullYear()} */}
        <a href="https://www.linkedin.com/in/evan-karwowski/" target="_blank" rel="noreferrer">
          <img src="https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png" alt="Linked in logo" width={'4%'}/>
        </a>  
        <a href="https://github.com/evankski/" target="_blank" rel="noreferrer">
          <img src="http://rajlab.org/icons/github_white.png" alt="github logo" width={'4%'}/>
        </a>  
      </footer>
        
    </div>
  )
}