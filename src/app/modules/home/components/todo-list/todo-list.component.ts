import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList : Array<TaskList> = [
    {task: "Minha nova task", checked: true},
    {task: "Minha nova task2", checked: false}

  ]
  constructor() { }

  ngOnInit(): void {
  }

  deleteItemTaskList(event: any){
    this.taskList.splice(event, 1)
  }

  deleteAll(){
    const confirm = window.confirm("Deseja deletar tudo?")
    if(confirm){
      this.taskList = [];
    }
  }

  setEmitItemTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }
}
