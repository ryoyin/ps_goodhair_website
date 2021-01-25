import ContactLayout from '../components/pages/contact'
import { getTDK } from '@/data/seo/tdk'

const Contact = () => {
    return (
        <ContactLayout />
    )
}

Contact.getInitialProps = async () => {
    const tdk = await getTDK()

    return {
        tdk: tdk.contact
    }
}

export default Contact