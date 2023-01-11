import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabinetHeaderComponent } from '../shared/cabinet-header/cabinet-header.component';
// import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-cabinet',
  standalone: true,
  imports: [RouterModule, CabinetHeaderComponent, CommonModule],
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
