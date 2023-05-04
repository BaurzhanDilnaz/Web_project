import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthToken } from './models';
import { Task } from './models';
import { User } from './user';
import { StudentService } from './student.service';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  BASE_URL = 'http://localhost:8000'
  s : []
  // user_id : number
  constructor(
    private client: HttpClient,
    private service: StudentService
  ) { 
    this.s = []
    const userStr = localStorage.getItem(USER_KEY);
    if(userStr){
      this.s = JSON.parse(userStr)
    }
    // this.user_id = this.s[0]
  }
  
  getTasks(): Observable<Task[]> {
    console.log(this.s)
    return this.client.get<Task[]>(
      `${this.BASE_URL}/tasks`
    )
  }

  createTask(title: string, description: string, subject_name: string, date: string): Observable<Task> {
    return this.client.post<Task>(
      `${this.BASE_URL}/tasks`,
      { title, description, subject_name, date, user : this.s}
    )
  }

}
