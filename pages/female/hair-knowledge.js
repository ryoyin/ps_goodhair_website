import HairKnowledgeLayout from '@/components/pages/hair-knowledge'
import {getTranslation} from '@/data/hair-knowledge'
import {getTDK} from '@/data/seo/tdk'

const HairKnowledge = (props) => {
    return (
        <HairKnowledgeLayout gender='female' translation={props.translation} />
    )
}

HairKnowledge.getInitialProps = async() => {
    const translation = await getTranslation()
    const tdk = await getTDK()

    return {
        translation,
        tdk: tdk.female.treatment
    }
}

export default HairKnowledge