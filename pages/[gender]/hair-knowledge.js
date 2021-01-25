import { getTranslationByGender } from '@/data/hair-knowledge'
import Layout from '@/components/layout/layout'
import HairKnowledgeLayout from '@/components/pages/hair-knowledge'

const HairKnowledge = (props) => {
    const currentPage = props.currentPage
    const gender      = props.gender
    const translation = props.translation

    return (
        <Layout 
            currentPage={ currentPage }
            gender= { gender }
            translation={ translation }
        >
            <HairKnowledgeLayout gender={ gender } translation={ translation } />
        </Layout>
    )

}

HairKnowledge.getInitialProps = async({query}) => {
    const gender = query.gender
    const translation = await getTranslationByGender(gender)
    const currentPage = 'hair-knowledge'

    return { translation, gender, currentPage }
}

export default HairKnowledge