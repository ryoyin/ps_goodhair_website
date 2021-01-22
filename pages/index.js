import IndexLayout from '../components/pages/index'
import {getTDK} from '@/data/seo/tdk'

const Home = () => {
  return (
    <IndexLayout />
  )
}

Home.getInitialProps = async() => {
  const tdk = await getTDK()

  return {
    tdk: tdk.index
  }
}

export default Home