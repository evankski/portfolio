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
        © Evan {new Date().getFullYear()}
      </footer>
    </div>
    </>
  )
}

export default MyApp