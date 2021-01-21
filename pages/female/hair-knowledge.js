import HairKnowledgeLayout from '@/components/pages/hair-knowledge'
import {getTranslation} from '@/data/hair-knowledge'

const HairKnowledge = (props) => {
    return (
        <HairKnowledgeLayout gender='female' translation={props.translation} />
    )
}

HairKnowledge.getInitialProps = async() => {
    const translation = await getTranslation()

    return {
        translation
    }
}

export default HairKnowledge