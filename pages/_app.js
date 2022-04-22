import '../styles/globals.css'
import Navbar from '../components/navbar'
import About from './about'
import Skills from './skills'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='main'>
      {/* <Navbar /> */}

      <main>
         <Component {...pageProps} />
         <About />
         <Skills />
      </main>

      <footer>
        © Evan {new Date().getFullYear()}
      </footer>
    </div>
    </>
  )
}

export default MyApp