import DisclamierLayout from '../components/pages/disclamier'
import { getTDK } from '@/data/seo/tdk'
const Disclamier = () => {
    return (
        <DisclamierLayout />
    )
}
Disclamier.getInitialProps = async () => {
    const tdk = await getTDK()
    return {
        tdk: tdk.Disclamier
    }
}

export default Disclamier



