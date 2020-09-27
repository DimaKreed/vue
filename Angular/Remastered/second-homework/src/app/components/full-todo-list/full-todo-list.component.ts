import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {TodoModel} from '../../models/todo.model';

@Component({
  selector: 'app-full-todo-list',
  templateUrl: './full-todo-list.component.html',
  styleUrls: ['./full-todo-list.component.css']
})
export class FullTodoListComponent implements OnInit {
  todoList: TodoModel[] = [];
  // tslint:disable-next-line:typedef
  get list(){
    return this.todoList;
  }
  constructor(private todoService: TodoService) {
     this.todoService.getListOfTodo().subscribe(todo => {
      for (const value in todo) {
        console.log(value);
        // @ts-ignore
        this.todoList.push({todo: todo[value], id: value});
      }
    });
  }
   delete(id){
     this.todoService.deleteTaskFromListOfTodo(id).subscribe(value => value, error => console.log(error));
     this.todoList.splice(this.todoList.findIndex(value => value.id === id), 1);
   }
  ngOnInit(): void {
  }
}
