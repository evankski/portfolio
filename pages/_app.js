import '../styles/globals.css'
import Navbar from '../components/navbar'
import About from './about'
import Skills from './skills'
import Projects from './projects'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='main'>
      {/* <Navbar /> */}

      <main>
         <Component {...pageProps} />
         <About />
         <Skills />
         <Projects />
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
    </>
  )
}

export default MyApp