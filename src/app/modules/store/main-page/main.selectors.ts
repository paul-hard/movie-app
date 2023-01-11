import { createSelector } from "@ngrx/store";

import { IAppState } from "../app.state";
import { IMovieApiSearchState } from './main.state'

export const selectMovieApi = (state: IAppState) => state.movieApiSearch;

export const selectMovieApiResponse = createSelector(
    selectMovieApi,
    (state: IMovieApiSearchState) => state.apiResponce
);

export const selectPrecessingStatus = createSelector(
    selectMovieApi,
    (state: IMovieApiSearchState) => state.inProcessing
);

export const selectDoneStatus = createSelector(
    selectMovieApi,
    (state: IMovieApiSearchState) => state.done
);











