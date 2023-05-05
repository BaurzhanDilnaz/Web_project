export interface AuthToken {
    token: string
}

export interface Task {
    id: number,
    title: string,
    subject: string,
    description: string,
    date: string,
    user_id: number
}
export class ToDoTask {
    static currentId: number = 0;
    id: number;
    title: string;
    isDone: boolean;

    constructor(title: string) {
        this.id = ++ToDoTask.currentId;
        this.title = title;
        this.isDone = false;
    }
}