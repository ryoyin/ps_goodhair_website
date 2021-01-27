import PrivacyLayout from '../components/pages/privacy'
import { getTranslation } from '@/data/privacy'
import { getGender } from '@/functions/common'
import Layout from '@/components/layout/layout'
const Privacy = (props) => {
    const currentPage = props.currentPage
    const gender = props.gender
    const translation = props.translation
    return (
        <Layout
            currentPage={currentPage}
            gender={gender}
            translation={translation}
        >
            <PrivacyLayout />
        </Layout>
    )
}
Privacy.getInitialProps = async () => {
    const currentPage = 'privacy'
    const gender = getGender(currentPage)
    const translation = await getTranslation()
    return {
        translation, gender, currentPage
    }
}

export default Privacy



