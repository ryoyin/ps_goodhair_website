const hairKnowledge = {
    tdk: {
        title: '你的頭髮護理專家',
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

