import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FullTodoListComponent } from './components/full-todo-list/full-todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { DeleteTodoComponent } from './components/delete-todo/delete-todo.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullTodoListComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    DeleteTodoComponent,
    AuthorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
