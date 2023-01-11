import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cabinet-header',
  standalone: true,
  imports: [],
  templateUrl: './cabinet-header.component.html',
  styleUrls: ['./cabinet-header.component.scss'],
  providers: []
})
export class CabinetHeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut().subscribe()
    this.router.navigate['sign-in']
  }

}
