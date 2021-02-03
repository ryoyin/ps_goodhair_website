const hairKnowledge = {
    tdk: {
        title: 'Thank you',
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

