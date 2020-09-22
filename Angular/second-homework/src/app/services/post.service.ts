import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PostModel} from "../models/post.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPostsById(id:number):Observable<PostModel[]>{
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }

}
