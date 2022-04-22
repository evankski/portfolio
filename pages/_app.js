import '../styles/globals.css'
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='main'>
      <Navbar />

      <main>
         <Component {...pageProps} />
      </main>

      <footer>
        © Evan {new Date().getFullYear()}
      </footer>
    </div>
    </>
  )
}

export default MyApp