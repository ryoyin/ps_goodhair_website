import DisclaimerLayout from '../components/pages/disclaimer'
import { getTranslation } from '@/data/disclaimer'
import { getGender } from '@/functions/common'
import Layout from '@/components/layout/layout'
const Disclaimer = (props) => {
    const currentPage = props.currentPage
    const gender = props.gender
    const translation = props.translation
    return (
        <Layout
            currentPage={currentPage}
            gender={gender}
            translation={translation}>
            <DisclaimerLayout />
        </Layout>
    )

}
Disclaimer.getInitialProps = async () => {
    const currentPage = 'disclaimer'
    const gender = getGender(currentPage)
    const translation = await getTranslation()
    return { translation, gender, currentPage }
}

export default Disclaimer



