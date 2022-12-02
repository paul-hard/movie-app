import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IResponce, IMuvie } from '../../global-interfaces';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public url: string = 'http://localhost:3200/suggested-muvies';
  public libraryUrl: string = 'http://localhost:3200/my-library';

  constructor(private http: HttpClient) { }


  getMultiSearch(query: string) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=cb54c90b7e2c3b40e5a8ffcb081daefb&language=en-US&query=${query}&page=1&include_adult=false`
    return this.http.get(url).pipe(map(response => response as IResponce))
  }


  getAll() { //change url to libraryUrl
    return this.http.get(this.libraryUrl).pipe(map((response) => {
      return response as IMuvie[]
    }))
  }

  addToLibrary(muvie: IMuvie) {
    return this.http.post(this.libraryUrl, muvie)
  }

}
