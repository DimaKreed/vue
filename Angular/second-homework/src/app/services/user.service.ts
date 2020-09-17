import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../../../first-homework/src/app/models/user.model";
import {PostModel} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

  getUsers():Observable<UserModel[]>{
      return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users')
  }

}
