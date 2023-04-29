import { Component, OnInit } from '@angular/core';
import { Task, tasks } from '../models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks : Task[] = []
  addtask : boolean
  subject_name : string
  date : string
  description : string
  title : string
  details : boolean
  task : Task

  constructor(){
    this.addtask = false
    this.tasks = tasks
    this.subject_name = ""
    this.date = ""
    this.description = ""
    this.title = ""
    this.details = false
    this.task = {} as Task
  }

  ngOnInit() {
    return this.task
  }


  AddTask(){
    this.addtask = true
    this.details = false
  }

  cancel(){
    this.addtask = false
  }

  createTask(){
    this.title = ""
    this.description = ""
    this.subject_name = ""
    this.date = ""
  }

  forupdate(title : string){
    this.details = true
    this.addtask = false
    this.task = this.tasks.find(task => task.title === title)!
    console.log(title, this.details, this.task)
    // this.task.isActive = true
    // this.task.active += 1
  }

  close(){
    this.details = false
  }
}
