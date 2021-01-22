const hairKnowledge = {
    male: {
        title: 'male title',
        decription: 'male decription',
        knowyourhair: '醫療級軟激光生髪科技，針對易脫髮的生長週期，以「止脫」為理念，專門解決大量脫髮問題，延長頭髮的壽命，平衡脫髮速度及生長速度。 123'
    },
    female: {
        title: 'female title',
        decription: 'female decription',
        knowyourhair: '醫療級軟激光生髪科技，針對易脫髮的生長週期，以「止脫」為理念，專門解決大量脫髮問題，延長頭髮的壽命，平衡脫髮速度及生長速度。 456'
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