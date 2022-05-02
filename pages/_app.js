import '../styles/globals.css'
import Navbar from '../components/navbar'
import About from './about'
import Skills from './skills'
import Projects from './projects'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='main'>
      <main>
         <Component {...pageProps} />
      </main>
    </div>
    </>
  )
}

export default MyApp