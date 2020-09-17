import {Component,  OnInit} from '@angular/core';
import {PostModel} from "../../models/post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:PostModel[]=[];
ar=['xx'];
  constructor() { }

  ngOnInit(): void {
  }

}
