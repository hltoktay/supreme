import '../styles/globals.css'

import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';


function MyApp({ Component, pageProps }) {
  return (
    <>
        {/* <Sidebar />
        <Carousel /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
