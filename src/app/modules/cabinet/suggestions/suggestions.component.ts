import { Component, OnInit } from '@angular/core';
import { IMuvie } from '../../global-interfaces';
import { CabinetService } from '../cabinet-services/cabinet.service';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  public baseURL: string = 'https://image.tmdb.org/t/p/w500';

  public suggestions: IMuvie[];

  constructor(
    private service: CabinetService
  ) { }

  ngOnInit(): void {
    this.service.getSuggested().subscribe((data) => {
      this.suggestions = data

    })
  }

}
