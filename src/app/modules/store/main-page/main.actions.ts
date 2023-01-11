import { createAction, props } from '@ngrx/store';
import { IMovieAPIResponse } from '../../global-interfaces';

export enum EMainActions {
    GetMultiSearch = '[Responce/Movie API] Get Multi Search',
    GetMultiSearchSuccess = '[Responce/Movie API] Get Multi Search Success',
    GetMultiSearchFail = '[Responce/Movie API] Get Multi Search Fail'
}

export const multiSearching = createAction(
    EMainActions.GetMultiSearch,

    props<{ query: string }>()
);

export const multiSearchingSuccess = createAction(
    EMainActions.GetMultiSearchSuccess,

    props<{ response: IMovieAPIResponse }>()
);

export const multiSearchingFail = createAction(
    EMainActions.GetMultiSearchFail,

    props<{ errorMsg: string }>()
);

