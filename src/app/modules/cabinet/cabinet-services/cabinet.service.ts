import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'

import { IMuvie } from '../../global-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  public url: string = 'http://localhost:3200/suggested-muvies'
  constructor(
    private http: HttpClient
  ) { }

  getSuggested() {
    return this.http.get(this.url).pipe(map((response) => {
      return response as IMuvie[]
    }))
  }

}
