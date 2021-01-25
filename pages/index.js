import { getTranslation } from '@/data/index'
import { getGender } from '@/functions/common'
import Layout from '@/components/layout/layout'
import IndexLayout from '../components/pages/index'

const Home = (props) => {

    const currentPage = props.currentPage
    const gender      = props.gender
    const translation = props.translation

    return (
        <Layout 
            currentPage = { currentPage }
            gender      = { gender }
            translation = { translation }
        >
            <IndexLayout />
        </Layout>
    )
}

Home.getInitialProps = async({query}) => {
    const currentPage = 'index'
    const gender      = getGender(currentPage)
    const translation = await getTranslation()

    return { translation, gender, currentPage }
}

export default Home