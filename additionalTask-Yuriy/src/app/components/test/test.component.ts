import { Component, OnInit } from '@angular/core';
import {GetFromApiService} from "../../services/get-from-api.service";
import {RequestModel} from "../../models/requestModel";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
data:[]=[];
  constructor(private getFromApiService:GetFromApiService) {

    for (let i = 0; i < 5; i++) {
      this.getFromApiService.getListOfArticles(i).subscribe(value => value.articles.forEach(value1 =>this.data.push(value1) ) )
    }

  }

  ngOnInit(): void {
  }

}
