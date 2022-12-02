import { Component, OnInit, Input } from '@angular/core';

import { MainPageService } from '../../main-page/services/main-page.service';
import { SharedService } from '../shared/shared.service'
import { IResponce, IMuvie } from '../../global-interfaces';

interface ISuggestMuvie {
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path: string,
  release_date?: string,
  title?: string,
  vote_average: number,
  id?: number,
  media_type: string,
  genre_ids?: number[];
  name?: string;
  isWatched?: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  public baseURL: string = 'https://image.tmdb.org/t/p/w500';
  public library: IMuvie[]

  @Input() recivedMuvie: IMuvie[];


  constructor(
    private service: MainPageService,
    private sharedServices: SharedService,
  ) { }

  ngOnInit(): void {
    this.getLibrary();
  }

  suggest(item: ISuggestMuvie) {
    const suggested: IMuvie = {
      muvie_id: item.id,
      title: item.title,
      name: item.name,
      poster_path: item.poster_path,
      media_type: item.media_type,
      vote_average: item.vote_average,
    }
    // this.service.suggestMuvie(suggested).subscribe({
    // })
  }

  addToLibrary(item: IMuvie) {
    const watched: IMuvie = {
      muvie_id: item.muvie_id,
      title: item.title,
      name: item.name,
      poster_path: item.poster_path,
      media_type: item.media_type,
      vote_average: item.vote_average,
      isWatched: true
    }

    this.sharedServices.addToLibrary(watched).subscribe({

    })

    //remove from suggested
  }

  getLibrary() {
    this.sharedServices.getAll().subscribe({
      next: data => {
        this.library = data
      }
    })
  }

  isWatched() {

  }


}
