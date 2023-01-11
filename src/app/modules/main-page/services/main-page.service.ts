import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IMovieAPIResponse } from '../../global-interfaces';


@Injectable({
    providedIn: 'root'
})
export class MainPageService {

    constructor(private http: HttpClient) { }

    public testUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=cb54c90b7e2c3b40e5a8ffcb081daefb&language=en-US'

    getLates() {
        return this.http.get(this.testUrl)
    }

    getMultiSearch(query: string): Observable<IMovieAPIResponse> {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=cb54c90b7e2c3b40e5a8ffcb081daefb&language=en-US&query=${query}&page=1&include_adult=false`
        return this.http.get(url).pipe(map(response => {
            return response as IMovieAPIResponse
        }))
    }

    // suggestMuvie(muvie: I) {
    //     const url = `http://localhost:3200/suggested-muvies`
    //     return this.http.post(url, muvie)
    // }
}


/*

    user_1: {
        id: string,
        username: string,
        password: string,
        suggested_movies: [
            movie_1: {
            id: string,
            title: string,
            poster_path: string,
            description: string,
        }],
        movie_library: [
            movie_1: {
            id: string,
            title: string,
            poster_path: string,
            description: string,
        }, movie_2: {
            id: string,
            title: string,
            poster_path: string,
            description: string,
        }],
    }

*/