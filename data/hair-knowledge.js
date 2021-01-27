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
            hair_loss: [
                {
                    id: "1",
                    numpic: "/images/treatment-hair-loss-type-num1.png",
                    pic: "/images/m1.png",
                    name: "雄激素遺傳脫髮",
                    description: "禿髮部位大都在前額，頭頂及後頭枕部上方。",
                },
                {
                    id: "2",
                    numpic: "/images/treatment-hair-loss-type-num2.png",
                    pic: "/images/m2.png",
                    name: "脂溢性禿髮",
                    description: "前額兩側及頭頂的頭髮對稱地變得稀疏及幼細。頭油多，阻塞毛孔，皮脂積存在毛囊，引起發炎，生長期的頭髮變成靜止期，造成脫髮。",
                },
                {
                    id: "3",
                    numpic: "/images/treatment-hair-loss-type-num3.png",
                    pic: "/images/m3.png",
                    name: "早禿",
                    description: "從前額兩開始脫髮並向後延伸，漸漸稀少而織細，頭痕，或因腦力過勞。",
                },
                {
                    id: "4",
                    numpic: "/images/treatment-hair-loss-type-num4.png",
                    pic: "/images/m4.png",
                    name: "M字型脫髮",
                    description: "前額髮際線開始稍微向後移，情況嚴重時延至後枕。",
                },
                {
                    id: "5",
                    numpic: "/images/treatment-hair-loss-type-num5.png",
                    pic: "/images/m5.png",
                    name: "普及性稀疏",
                    description: "壓力令頭油過多，緊張令頭蓋肌肉拉緊，影響血液循環，導致頭頂之頭髮稀疏及脫髮，通常會造成禿頭。",
                },
            ]
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
            hair_loss: [
                {
                    id: "1",
                    numpic: "/images/treatment-hair-loss-type-num1.png",
                    pic: "/images/treatment-hair-loss-type-1.png",
                    name: "脂溢性禿髮",
                    description: "前額兩側及頭頂的頭髮對稱地變得稀疏及幼細。頭油多，阻塞毛孔，皮脂積存在毛囊，引起發炎，生長期的頭髮變成靜止期，造成脫髮。",

                },
                {
                    id: "2",
                    numpic: "/images/treatment-hair-loss-type-num2.png",
                    pic: "/images/treatment-hair-loss-type-2.png",
                    name: "Ｍ字型脫髮",
                    description: "前額髮線開始稍微向後移，情況嚴重時延至後枕。",

                },
                {
                    id: "3",
                    numpic: "/images/treatment-hair-loss-type-num3.png",
                    pic: "/images/treatment-hair-loss-type-3.png",
                    name: "普及性稀疏",
                    description: "壓力令頭油過多，緊張令頭蓋肌肉拉緊，影響血液循環，導致頭頂之頭髮稀疏及脫髮，通常會造成禿頭。",
                },
                {
                    id: "4",
                    numpic: "/images/treatment-hair-loss-type-num4.png",
                    pic: "/images/treatment-hair-loss-type-4.png",
                    name: "雄性脫髮",
                    description: "女性常見脫髮原因之一，一般都頭髮變得稀疏，不會完全禿頭。一般於 20-30歲開始，多源於遺傳。",
                },
            ]
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
