import { IMovieAPIResponse } from '../../global-interfaces'


export interface IMovieApiSearchState {
    searchValue: string,
    apiResponce: IMovieAPIResponse,
    error: null | string,
    inProcessing: boolean,
    done: boolean,
}