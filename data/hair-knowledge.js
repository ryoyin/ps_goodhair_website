const hairKnowledge = {
    male: {
        title: 'male title',
        decription: 'male decription',
    },
    female: {
        title: 'female title',
        decription: 'female decription',
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