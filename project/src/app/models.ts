export interface AuthToken{
    token : string
}

export interface Task{
    id : number,
    title : string,
    subject : string,
    description : string,
    isActive : boolean,
    active : number
}
export class ToDoTask {
    currentId: number = 1;
    id: number;
    title: string;
    isDone: boolean;
  
    constructor(title: string) {
      this.id = this.currentId++;
      this.title = title;
      this.isDone = false;
    }
  }