import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared/shared/shared.service';
import { IMuvie } from '../../global-interfaces';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  public tv: IMuvie[]

  constructor(
    private service: SharedService,
  ) { }

  ngOnInit(): void {
    this.initCards()
  }

  initCards() {
    this.service.getAll().subscribe({
      next: data => {
        this.tv = data.filter(item => item.media_type === "tv")
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
