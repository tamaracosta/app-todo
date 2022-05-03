import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList : Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage()

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

  validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Tarefa vazia! Deseja deletar?")
      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))

    }
  }

}
