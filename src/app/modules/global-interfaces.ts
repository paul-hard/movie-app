export interface IMuvie {
    _id?: string
    muvie_id?: number,
    title?: string,
    name?: string,
    poster_path: string,
    media_type: string,
    vote_average: number,
    isWatched?: boolean,
    original_title?: string,
    backdrop_path?: string,
    overview?: string,
    popularity?: number,
    release_date?: string,
    video?: boolean,
    vote_count?: number,
    id?: number,
    genre_ids?: number[],
}

export interface IResponce {
    results: [
        {
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
    ]

}

export interface IRecivedData {

}