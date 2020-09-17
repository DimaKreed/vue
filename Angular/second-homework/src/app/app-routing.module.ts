import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FullTodoListComponent} from "./components/full-todo-list/full-todo-list.component";
import {AddTodoComponent} from "./components/add-todo/add-todo.component";
import {AuthorComponent} from "./components/author/author.component";
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "./components/posts/posts.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'allTodo',component:FullTodoListComponent},
  {path:'addTodo',component:AddTodoComponent},
  {path:'author',component:AuthorComponent},
  {path:'users', component:UsersComponent},
  {path:'users/:id/posts',component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
