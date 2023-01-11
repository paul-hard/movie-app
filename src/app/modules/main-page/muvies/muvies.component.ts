import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { SharedService } from '../../shared/shared/shared.service';

// import { IMuvie } from '../../global-interfaces';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-muvies',
  templateUrl: './muvies.component.html',
  styleUrls: ['./muvies.component.scss']
})
export class MuviesComponent implements OnInit {
  public baseURL: string = 'https://image.tmdb.org/t/p/w250'
  // public muvies: IMuvie[] = []


  constructor(
    // private service: SharedService,
  ) { }

  ngOnInit() {
    this.initCard();
  }

  searchMuvie(event: string) {
    console.log(event); // get request with name, recived data filter and assign to muvies
  }

  initCard() {
    // this.service.getAll().subscribe({
    //   next: data => { this.muvies = data.filter(item => item.media_type === 'movie'); },
    //   error: err => { console.error(err); }
    // })

  }

}
