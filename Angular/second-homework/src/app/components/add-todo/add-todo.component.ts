import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoService} from "../../services/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private http:HttpClient,private todoService:TodoService,private router:Router,private route:ActivatedRoute) { }

  addTodo():boolean{
    //@ts-ignore
    let addForm=document.forms.addTodo;
    let taskInput=addForm.elements.task;
    let descriptionInput=addForm.elements.description;
  let todo={task:taskInput.value,
  description:descriptionInput.value}
 this.todoService.addTaskToListOfTodo(todo).subscribe(value => value, error => console.log(error));

  this.router.navigate(["/allTodo"], {relativeTo: this.route});
    return false;
}

checkInputs():void{
  //@ts-ignore
  let addForm=document.forms.addTodo;
  let taskInput=addForm.elements.task;
  let descriptionInput=addForm.elements.description;
  let button=addForm.elements.button;

  (taskInput.value===''||descriptionInput.value==='')? button.disabled='true':button.removeAttribute('disabled');

}


  ngOnInit(): void {
  }

}
