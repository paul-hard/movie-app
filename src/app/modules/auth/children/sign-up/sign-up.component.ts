import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/auth/auth.service';
import { ICreateUser } from '../../../global-interfaces';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthService,]
})
export class SignUpComponent implements OnInit {


  public user: ICreateUser
  public signUpForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm()

  }


  signUp() {
    console.log('signUp clicked');
    this.user = {
      username: this.signUpForm.value.username,
      password: this.signUpForm.value.pass
    }

    this.authService.signUp(this.user).subscribe({
      next: (data) => {
        console.log(data);
        alert('signUp successful');
      },
      error: (error) => {
        alert('signUp failed');
      },
    });
  }

  initForm() {
    this.signUpForm = this.builder.group({
      username: [''],
      pass: [''],
      confirm_pass: ['']
    })
  }


}
