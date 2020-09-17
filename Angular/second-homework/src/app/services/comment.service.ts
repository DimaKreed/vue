import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentModel} from "../models/comment.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private  http:HttpClient) {
  }
  getComments(id):Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }
}
