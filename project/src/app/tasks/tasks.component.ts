import { Component, OnInit } from '@angular/core';
import { Task} from '../models';
import { ModelsService } from '../models.service';
import { StudentService } from '../student.service';

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
  edit : boolean

  constructor(
    private service : ModelsService,
    private userservice : StudentService
  ){
    this.addtask = false
    this.subject_name = ""
    this.date = ""
    this.description = ""
    this.title = ""
    this.details = false
    this.task = {} as Task
    this.userservice.changeNameMail()
    this.edit = false
  }

  ngOnInit() {
    this.getTasks()
    this.userservice.changeNameMail()
  }
  
  
  getTasks(){
    this.service.getTasks().subscribe((tasks) => {
      this.tasks = tasks
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
    this.userservice.changeNameMail()
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
  }

  close(){
    this.details = false
  }

  deleteTask(id : number){
    this.service.deleteTask(id).subscribe((data) =>{
      this.details = false
      this.tasks = this.tasks.filter((task) => task.id != id)
    })
  }

  edit_button(){
    this.edit = true
    this.addtask = false
    this.details = false
  }
}
