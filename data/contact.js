const hairKnowledge = {
    tdk: {
        title: '關於我們',
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

