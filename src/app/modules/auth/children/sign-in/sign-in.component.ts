import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateUser, IUser } from '../../../global-interfaces';
import { AuthService } from '../../../shared/auth/auth.service';
import { Router } from '@angular/router';

import { switchMap } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  public userInfo: IUser;
  public signInForm: FormGroup;
  public user: ICreateUser;


  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm()

  }

  signIn() {
    this.user = {
      username: this.signInForm.value.username,
      password: this.signInForm.value.pass,
    }

    let authFlowTest = this.authService.signIn(this.user)
      .pipe(
        switchMap(() => this.authService.getUser())
      )

    authFlowTest.subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['dashboard'])
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  initForm() {
    this.signInForm = this.builder.group({
      username: [''],
      pass: ['']
    })
  }
}


   // let authFlow = this.authService.signIn(this.user)
    //   .pipe(
    //     switchMap(() => this.authService.getUser(this.user.username)));

    // authFlow.subscribe({
    //   next: (user: IUser) => {
    //     this.authService.saveUser(user)
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
