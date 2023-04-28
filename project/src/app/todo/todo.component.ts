import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
//   interface ToDoItem {
//   todo: string;
//   checked: boolean;
// }

// let addMessage = document.querySelector<HTMLInputElement>('.new_task'),
//   addButton = document.querySelector<HTMLButtonElement>('.add'),
//   todo = document.querySelector<HTMLUListElement>('.todo');

// let toDoList: ToDoItem[] = [];

// if (localStorage.getItem('todo')) {
//   toDoList = JSON.parse(localStorage.getItem('todo')) as ToDoItem[];
//   displayMessages();
// }

// addButton.addEventListener('click', function () {
//   let newToDo: ToDoItem = {
//     todo: addMessage.value,
//     checked: false,
//   };
//   toDoList.push(newToDo);
//   displayMessages();
// });

// function displayMessages() {
//   let displayMessage = '';
//   toDoList.forEach(function (item: ToDoItem, i: number) {
//     displayMessage += `
//               <li>
//                   <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
//                   <label for='item_${i}'>${item.todo}</label>
//               </li>
//           `;
//   });
//   todo.innerHTML = displayMessage;
//   localStorage.setItem('todo', JSON.stringify(toDoList));
// };

// function remove(todo: ToDoItem) {
//   const toDoList = JSON.parse(localStorage.getItem('todo')) as ToDoItem[];
//   localStorage.setItem('todo', JSON.stringify(toDoList.filter((item) => item.todo !== todo.todo)));
//   displayMessages();
// }
}
