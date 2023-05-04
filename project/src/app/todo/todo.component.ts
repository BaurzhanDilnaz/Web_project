import { Component } from '@angular/core';
import { ToDoTask } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTasks: ToDoTask[];
  currentTask: ToDoTask;

  constructor() {
    this.newTasks = [
      new ToDoTask('task 1'),
      new ToDoTask('task 2'),
    ];
    this.currentTask = new ToDoTask('');
  }

  ngOnInit(): void {
  }

  addTask() {
    if (this.currentTask.title !== '') {
      // this.currentTask.id = this.newTasks.length + 1;
      this.newTasks.push(this.currentTask);
      this.currentTask = new ToDoTask('');
    } else {
      alert('Enter task title');
    }
  }

  onNewTaskRemove(index: number) {
    this.newTasks = this.newTasks.filter((x) => x.id !== index);
  }
}
