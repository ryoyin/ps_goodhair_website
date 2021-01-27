const hairKnowledge = {
    tdk: {
        title: '免責條款',
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

