import { Component, OnInit, Input } from '@angular/core';

import { MainPageService } from '../services/main-page.service';
import { IResponce, IMuvie } from '../../global-interfaces';
import { SharedService } from '../../shared/shared/shared.service';

@Component({
  selector: 'app-suggest-me',
  templateUrl: './suggest-me.component.html',
  styleUrls: ['./suggest-me.component.scss']
})
export class SuggestMeComponent implements OnInit {

  public multiSearchName: string = '';
  public multiSearchResponce: IMuvie[]
  public library: IMuvie[];

  constructor(
    private service: MainPageService,
    private libraryService: SharedService
  ) { }

  ngOnInit(): void {
    this.getLibrary()
  }

  multiSearchEvent(event: string) {
    this.multiSearchName = event
  }

  multiSearchInitClick() {
    this.service.getMultiSearch(this.multiSearchName).subscribe(data => {
      this.multiSearchResponce = data.results.map(item => {
        let watched = this.library.find(lib => lib.muvie_id == item.id);
        return watched ? { ...item, ...watched } : item;
      })
    });
  }

  getLibrary() {
    this.libraryService.getAll().subscribe({
      next: data => {

        this.library = data
      }
    })
  }


}
