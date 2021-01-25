import DisclaimerLayout from '../components/pages/disclaimer'
import { getTDK } from '@/data/seo/tdk'
const Disclaimer = () => {
    return (
        <DisclaimerLayout />
    )
}
Disclaimer.getInitialProps = async () => {
    const tdk = await getTDK()
    return {
        tdk: tdk.Disclaimer
    }
}

export default Disclaimer



