import { Component, OnInit } from '@angular/core';
import { ToDoTask } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  newTasks: ToDoTask[];
  currentTask: ToDoTask;

  constructor() {
    this.newTasks = [new ToDoTask('task 1'), new ToDoTask('task 2'), new ToDoTask('task 3'),];
    this.currentTask = new ToDoTask('');
  }

  ngOnInit(): void {
  }

  addTask() {
    if(this.currentTask.title !== ''){
      // this.currentTask.id = this.newTasks.length + 1;
      this.newTasks.push(this.currentTask);
      this.currentTask = new ToDoTask('');
    } else {
      alert('Enter the title of task');
    }
  }

  onNewTaskRemove(index: number){
    this.newTasks = this.newTasks.filter((x) => x.id !== index);
  }

  isDoneChanged(task: ToDoTask){
    console.log(task);
  }
}
