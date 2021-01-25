import { getTranslation } from '@/data/contact'
import { getGender } from '@/functions/common'
import Layout from '@/components/layout/layout'
import ContactLayout from '../components/pages/contact'

const Contact = (props) => {

    const currentPage = props.currentPage
    const gender      = props.gender
    const translation = props.translation

    return (
        <Layout 
            currentPage = { currentPage }
            gender      = { gender }
            translation = { translation }
        >
            <ContactLayout />
        </Layout>
    )

}

Contact.getInitialProps = async () => {

    const currentPage = 'contact'
    const gender      = getGender(currentPage)
    const translation = await getTranslation()

    return { translation, gender, currentPage }

}

export default Contact