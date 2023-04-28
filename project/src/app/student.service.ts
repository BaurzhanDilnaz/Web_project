import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { AuthToken } from './models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  BASE_URL = 'http://localhost:8000'

  constructor(private client: HttpClient) { }

  createUser( first_name : string, last_name : string, email:string, password : string, secret_word : string): Observable<Student>{
    return this.client.post<Student>(
      `${this.BASE_URL}/student`,
      {first_name : first_name, last_name : last_name, email:email, password : password, secret_word : secret_word}
    )
  }

  login(email : string, password : string): Observable<AuthToken>{
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/login/`,
      {email, password}
    )
  }

}
