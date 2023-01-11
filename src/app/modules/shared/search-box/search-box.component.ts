import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [MatInputModule, FormsModule, CommonModule],
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})

export class SearchBoxComponent {


  @Output() multiSearchEvent = new EventEmitter<string>();


  onKeyUpMultiSerach(event: string) {
    this.multiSearchEvent.emit(event)

  }

}
