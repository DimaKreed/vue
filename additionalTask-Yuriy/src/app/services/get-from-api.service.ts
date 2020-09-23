import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestModel} from "../models/requestModel";

@Injectable({
  providedIn: 'root'
})
export class GetFromApiService {

  constructor(private http: HttpClient) {
  }


  getListOfArticles(offset:number): Observable<RequestModel> {
    return this.http.get<RequestModel>(`https://conduit.productionready.io/api/articles?limit=100&offset=${offset}`);
  }
}
