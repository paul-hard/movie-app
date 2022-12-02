import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IResponce, IMuvie } from '../../global-interfaces';


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }


  getMultiSearch(query: string) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=cb54c90b7e2c3b40e5a8ffcb081daefb&language=en-US&query=${query}&page=1&include_adult=false`
    return this.http.get(url).pipe(map(response => {
      return response as IResponce
    }))
  }

  suggestMuvie(muvie: IMuvie) {
    const url = `http://localhost:3200/suggested-muvies`
    return this.http.post(url, muvie)
  }
}
