import { createReducer, on } from '@ngrx/store';
import * as MainActions from './main.actions';
import { IMovieAPIResponse } from '../../global-interfaces';
import { IMovieApiSearchState } from './main.state'



const initialState: IMovieApiSearchState = {
    searchValue: '',
    apiResponce: {} as IMovieAPIResponse,
    error: null,
    inProcessing: false,
    done: false
}

export const searchForMoviesReducer = createReducer(
    initialState,
    on(MainActions.multiSearching, (state, { query }) => (
        {
            ...state,
            searchValue: query
        }
    )),
    on(MainActions.multiSearchingSuccess, (state, { response }) => (
        {
            ...state,
            apiResponce: response
        }
    ))

)
