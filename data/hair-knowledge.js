const hairKnowledge = {
    male: {
        tdk: {
            title: '男士認識你的頭髮',
            description: '',
            keywords: '',
        },
        content: {
            banner_hero: "/images/treatment_banner_boy.png",
            banner_tagline: "/images/d_hp_tagline_man.png",
            case_before: "/images/treatment-boy-case-before.png",
            case_after: "/images/treatment-boy-case-after.png",
        }
    },
    female: {
        tdk: {
            title: '女士認識你的頭髮',
            description: '',
            keywords: '',
        },
        content: {
            banner_hero: "/images/treatment_banner_girl.png",
            banner_tagline: "/images/d_hp_tagline_woman.png",
            case_before: "/images/treatment-girl-case-before.png",
            case_after: "/images/treatment-girl-case-after.png",
        }
    }
}

export const getTranslation = () => {
    return new Promise((resolve, reject) => {
        resolve(hairKnowledge)
    })
}

export const getTranslationByGender = (gender) => {
    return new Promise((resolve, reject) => {
        resolve(hairKnowledge[gender])
    })
}
