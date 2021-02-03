const hairKnowledge = {
    tdk: {
        title: '條款細則',
        description: '',
        keywords: '',
    },
    content: {

    }
}

export const getTranslation = () => {
    return new Promise((resolve, reject) => {
        resolve(hairKnowledge)
    })
}

