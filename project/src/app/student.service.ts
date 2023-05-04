import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from './user';
import { AuthToken } from './models';

const USER_KEY = 'user';
@Injectable({
  providedIn: 'root'
})


export class StudentService implements OnInit{
  BASE_URL = 'http://localhost:8000'

  isLogged : boolean = false

  id:number
  usernameMain:string
  mailMain:string

  user: (string)[]

  logged(){
    this.isLogged = true
  }

  constructor(private client: HttpClient) { 
    this.usernameMain = ""
    this.mailMain = ""
    this.id = 0
    this.user = []
    const userStr = localStorage.getItem(USER_KEY);
    if(userStr){
      this.user = JSON.parse(userStr)
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
    ).pipe(
      map(response => {
        const token = response.token;
        const decodedToken = JSON.parse(
          decodeURIComponent(
            atob(token.split('.')[1])
              .split('')
              .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          )
        );
        const user_id = decodedToken.user_id;
        const email = decodedToken.email;
        const username = decodedToken.username;

        if(user_id != this.user[0]){
          this.user = []
        }

        console.log(user_id,email,username)

        if(this.user.length < 4){
          this.user.push(String(user_id))
          this.user.push(email)
          this.user.push(username)
        }

        // this.user = []

        



        // console.log(user_id,username,email)
        localStorage.setItem(USER_KEY, JSON.stringify(this.user));
        // this.changeNameMail()

        return { token, user_id, email, username };
      })
    );
  }

}
