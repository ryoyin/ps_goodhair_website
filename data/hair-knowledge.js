const hairKnowledge = {
    male: {
        banner_hero: "/images/treatment_banner_boy.png",
        banner_tagline: "/images/d_hp_tagline_man.png",
        case_before: "/images/treatment-boy-case-before.png",
        case_after: "/images/treatment-boy-case-after.png",
    },
    female: {
        banner_hero: "/images/treatment_banner_girl.png",
        banner_tagline: "/images/d_hp_tagline_woman.png",
        case_before: "/images/treatment-girl-case-before.png",
        case_after: "/images/treatment-girl-case-after.png",

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

// export const getMovies = () => {

//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             resolve(MOVIE_DATA)
//             // reject('cannot fetch data!')
//         }, 0)
//     })    
// }

// export const getMovieById = (id) => {
//     return new Promise((resolve, reject) => {
//         const movieIndex = MOVIE_DATA.findIndex((movie) => {
//             return movie.id === id
//         })

//         const movie = MOVIE_DATA[movieIndex];

//         setTimeout(() => {            
//             resolve(movie)
//         }, 0)
//     })
// }