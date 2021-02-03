import TCLayout from '../components/pages/terms-and-conditions'
import { getTranslation } from '@/data/privacy'
import { getGender } from '@/functions/common'
import Layout from '@/components/layout/layout'
const TC = (props) => {
    const currentPage = props.currentPage
    const gender = props.gender
    const translation = props.translation
    return (
        <Layout
            currentPage={currentPage}
            gender={gender}
            translation={translation}
        >
            <TCLayout />
        </Layout>
    )
}
TC.getInitialProps = async () => {
    const currentPage = 'terms-and-conditions'
    const gender = getGender(currentPage)
    const translation = await getTranslation()
    return {
        translation, gender, currentPage
    }
}

export default TC



