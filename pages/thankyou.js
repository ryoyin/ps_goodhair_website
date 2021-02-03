import ThankyouLayout from '../components/pages/thankyou'
import { getTranslation } from '@/data/thankyou'
import { getGender } from '@/functions/common'
import Layout from '@/components/layout/layout'
const Thankyou = (props) => {
    const currentPage = props.currentPage
    const gender = props.gender
    const translation = props.translation
    return (
        <Layout
            currentPage={currentPage}
            gender={gender}
            translation={translation}
        >
            <ThankyouLayout />
        </Layout>
    )
}
Thankyou.getInitialProps = async () => {
    const currentPage = 'thankyou'
    const gender = getGender(currentPage)
    const translation = await getTranslation()
    return {
        translation, gender, currentPage
    }
}

export default Thankyou



