import { Component, OnInit } from '@angular/core';
// import { IResponce } from '../../global-interfaces';
// import { SharedService } from '../../shared/shared/shared.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public multiSearchName: string = '';
  // public multiSearchResponce!: IResponce;

  constructor(
    // private srevice: SharedService
  ) { }

  ngOnInit(): void {
  }


  multiSearchEvent(event: string) {
    this.multiSearchName = event
    console.log(event);
  }


  multiSearchInitClick() {
    // console.log('clicked');
    // this.srevice.getMultiSearch(this.multiSearchName).subscribe(data => {
    //   this.multiSearchResponce = data
    //   console.log(this.multiSearchResponce);
    // })
  }

}
