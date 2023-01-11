import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

// import { SharedService } from '../../shared/shared/shared.service';
import { Observable } from 'rxjs';
import { SearchBoxComponent } from '../../shared/search-box/search-box.component';

import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state'
import { IMovieAPIResponse } from '../../global-interfaces';
import { multiSearching } from '../../store/main-page/main.actions'
import { selectMovieApiResponse } from '../../store/main-page/main.selectors';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CardComponent],
  selector: 'app-suggest-me',
  templateUrl: './suggest-me.component.html',
  styleUrls: ['./suggest-me.component.scss']
})
export class SuggestMeComponent implements OnInit {
  public multiSearchName: string;
  // public multiSearchResponce: Observable<IMovieAPIResponse> = this.store.select(selectMovieApiResponse);
  // public library: IMuvie[];

  constructor(
    // private service: MainPageService,
    // private libraryService: SharedService,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    // this.getLibrary()
  }

  multiSearchEvent(event: string) {
    this.multiSearchName = event
  }

  multiSearchInitClick() {
    console.log(this.multiSearchName);
    this.store.dispatch(multiSearching({ query: this.multiSearchName }))

    // this.service.getMultiSearch(this.multiSearchName).subscribe(data => {
    //   this.multiSearchResponce = data.results.map(item => {
    //     let watched = this.library.find(lib => lib.muvie_id == item.id);
    //     return watched ? { ...item, ...watched } : item;
    //   })
    // });
  }

  getLibrary() {
    // this.libraryService.getAll().subscribe({
    //   next: data => {
    //     this.library = data
    //   }
    // })
  }
}
