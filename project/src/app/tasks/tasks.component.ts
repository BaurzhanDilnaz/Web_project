import { Component, OnInit } from '@angular/core';
import { Task} from '../models';
import { ModelsService } from '../models.service';

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

  constructor(
    private service : ModelsService
  ){
    this.addtask = false
    this.subject_name = ""
    this.date = ""
    this.description = ""
    this.title = ""
    this.details = false
    this.task = {} as Task
  }

  ngOnInit() {
    this.getTasks()
    return this.tasks
  }
  
  
  getTasks(){
    this.service.getTasks().subscribe((tasks) => {
      this.tasks = tasks
      console.log(this.tasks) 
    })
  }

  AddTask(){
    this.addtask = true
    this.details = false
  }

  cancel(){
    this.addtask = false
  }

  createTask(){
    this.service.createTask(this.title, this.description, this.subject_name, this.date).subscribe((task) =>{
      this.title = ""
      this.description = ""
      this.subject_name = ""
      this.date = ""
    })
  }

  forupdate(title : string){
    console.log(title)
    this.details = true
    this.addtask = false
    console.log(this.tasks)
    this.task = this.tasks.find(task => task.title === title)!
    console.log(title, this.details, this.task)
    // this.task.isActive = true
    // this.task.active += 1
  }

  close(){
    this.details = false
  }
}
