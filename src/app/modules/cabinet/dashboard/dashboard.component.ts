import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
// import { CabinetService } from '../cabinet-services/cabinet.service';
// import { SharedService } from '../../shared/shared/shared.service';

// import { IMuvie } from '../../global-interfaces';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public tv: number = 0;
  public movie: number = 0;
  public suggestions: number = 0;

  constructor(
    // private service: CabinetService,
    // private libraryService: SharedService,
    private authService: AuthService,
  ) { }


  ngOnInit(): void {
    // this.getLibraryStats()
    // this.getSuggested()
    this.authService.getSuggestedMovies().subscribe({
      next: (data) => {
        console.log(data);
      }
    })

  }

  // getLibraryStats() {
  //   this.libraryService.getAll().subscribe({
  //     next: data => {
  //       this.tv = data.filter(item => item.media_type === 'tv').length;
  //       this.movie = data.filter(item => item.media_type === 'movie').length
  //     },
  //     //error
  //   })
  // }

  // getSuggested() {
  //   this.service.getSuggested().subscribe({
  //     next: data => { this.suggestions = data.length },
  //     //error
  //   })
  // }



}
