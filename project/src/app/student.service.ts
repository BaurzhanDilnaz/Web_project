import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { AuthToken } from './models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  BASE_URL = 'http://localhost:8000'

  constructor(private client: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.client.get<User[]>(
      `${this.BASE_URL}/student`
    )
  }

  createUser(first_name: string, last_name: string, email: string, password: string): Observable<User> {
    return this.client.post<User>(
      `${this.BASE_URL}/student`,
      {first_name : first_name , last_name: last_name, email: email, password: password,  secret_word : "qwerty"}
    )
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/login`,
      { username, password }
    )
  }

}
