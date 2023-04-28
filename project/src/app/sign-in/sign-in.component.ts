import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string;
  password: string;
  constructor(
    private router: Router,
    private service: StudentService
  ) {
    this.email = "";
    this.password = "";
  }

  login() {
    this.service.login(this.email, this.password).subscribe((token) => {
      localStorage.setItem('token', token.token);
      this.email = "";
      this.password = "";
      this.router.navigate(['/profile'])
    })
    this.email = "";
    this.password = "";
  }
}
