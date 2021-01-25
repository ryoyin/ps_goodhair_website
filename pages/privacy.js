import PrivacyLayout from '../components/pages/privacy'
import { getTDK } from '@/data/seo/tdk'
const Privacy = () => {
    return (
        <PrivacyLayout />
    )
}
Privacy.getInitialProps = async () => {
    const tdk = await getTDK()
    return {
        tdk: tdk.Privacy
    }
}

export default Privacy



