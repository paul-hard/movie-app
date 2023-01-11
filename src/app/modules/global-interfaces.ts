
export interface IMovieAPIResponse {
    original_title: string,
    backdrop_path: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    id: number,
    media_type: string,
    genre_ids: number[],
    name: string,
}

export interface ICreateUser {
    username: string
    password: string
}

export interface IUser {
    _id: string,
    usernanme: string
}





// export interface IMovieAPIResponce {
//     results: [
//         {
//             original_title: string,
//             backdrop_path: string,
//             overview: string,
//             popularity: number,
//             poster_path: string,
//             release_date: string,
//             title: string,
//             video: boolean,
//             vote_average: number,
//             vote_count: number,
//             id: number,
//             media_type: string,
//             genre_ids: number[],
//             name: string,
//         }
//     ]
// }

