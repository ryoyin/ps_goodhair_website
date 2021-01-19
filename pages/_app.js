import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/style.scss'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
