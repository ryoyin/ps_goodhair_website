const tdk = {
    index: {
        title: '爆髮 - 你的頭髮護理專家',
        description: '',
        keywords: ''
    },
    male: {
        treatment: {
            title: '男士認識你的頭髮',
            description: '',
            keywords: ''
        },
    },
    female: {
        treatment: {
            title: '女士認識你的頭髮',
            description: '',
            keywords: ''
        }
    },
    contact: {
        title: '關於我們',
        description: '',
        keywords: ''
    },
    privacy: {
        title: '私隱政策',
        description: '',
        keywords: ''
    },
    disclamier: {
        title: '免責條款',
        description: '',
        keywords: ''
    }

}

export const getTDK = () => {
    return new Promise((resolve, reject) => {
        resolve(tdk)
    })
}