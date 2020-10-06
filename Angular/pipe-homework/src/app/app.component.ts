import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-homework';

  URL='https://jsonplaceholder.typicode.com/users';
  users$:Observable<any[]>;

  constructor(private httpClient:HttpClient) {
    this.users$=this.httpClient.get<any[]>(`${this.URL}`);
  }
}
