import { getTranslationByGender } from '@/data/hair-knowledge'
import Layout from '@/components/layout/layout'
import HairKnowledgeLayout from '@/components/pages/hair-knowledge'

const HairKnowledge = (props) => {
    
    const currentPage = props.currentPage
    const gender      = props.gender
    const translation = props.translation

    return (
        <Layout 
            currentPage = { currentPage }
            gender      = { gender }
            translation = { translation }
        >
            <HairKnowledgeLayout 
                gender      = { gender }
                translation = { translation } />
        </Layout>
    )

}

export async function getStaticProps({ params }) {

    const currentPage = 'hair-knowledge'
    const gender      = params.gender
    const translation = await getTranslationByGender(gender)

    return { props: { translation, gender, currentPage } }

}

export async function getStaticPaths() {

    // set pre-render path for male and female
    const paths = [
        { params: { gender: 'male' } },
        { params: { gender: 'female' } }
    ]
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    // fallback does not support SSG
    return { paths, fallback: false }

}

export default HairKnowledge