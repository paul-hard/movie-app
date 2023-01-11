import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { SharedService } from '../../shared/shared/shared.service';
// import { IMuvie } from '../../global-interfaces';



@Component({
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // public all: IMuvie[]
  public quantity: number
  // constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.initCard()
  }

  initCard() {
    // this.service.getAll().subscribe({
    //   next: data => {
    //     this.all = data
    //     this.quantity = data.length
    //   }
    // })
  }


}
