import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FullTodoListComponent} from "./components/full-todo-list/full-todo-list.component";
import {AddTodoComponent} from "./components/add-todo/add-todo.component";
import {AuthorComponent} from "./components/author/author.component";
import {UsersComponent} from "./modules/users/components/users/users.component";
import {PostsComponent} from "./modules/users/components/posts/posts.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'allTodo',component:FullTodoListComponent},
  {path:'addTodo',component:AddTodoComponent},
  {path:'author',component:AuthorComponent},
  {path:'users', loadChildren:() => import('./modules/users/users.module').then(value => value.UsersModule)},
  {path:'users/:id/posts',component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
