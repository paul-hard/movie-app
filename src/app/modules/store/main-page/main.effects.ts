import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as MainActions from './main.actions'
import { catchError, map, of, pipe, switchMap } from 'rxjs'
import { MainPageService } from '../../main-page/services/main-page.service';
import { IMovieAPIResponse } from '../../global-interfaces';

@Injectable()
export class MultiSearchEffect {

    constructor(
        public actions$: Actions,
        public service: MainPageService
    ) { }


    multiSearch$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MainActions.multiSearching),
            switchMap(({ query }) => {
                return this.service.getMultiSearch(query).pipe(
                    map((response: IMovieAPIResponse) => MainActions.multiSearchingSuccess({ response })),
                    catchError((err) =>
                        of(MainActions.multiSearchingFail({ errorMsg: err.message }))
                    )
                );
            })
        )
    )

}