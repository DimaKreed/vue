import {Component,  OnInit} from '@angular/core';
import {PostModel} from "../../../../models/post.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:PostModel[]=[];
author:string='UserName';

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private postService:PostService,private commentsService:CommentService) {

    //Це для стейт використання
    this.posts=this.router.getCurrentNavigation().extras.state.user.posts;
    this.author=this.router.getCurrentNavigation().extras.state.author

    //Це для navigate

    // this.activatedRoute.params.subscribe(value => {
    //   this.postService.getPostsById(value.id).subscribe(posts => {this.posts = posts;
    //   for (let i = 0; i < this.posts.length; i++) {
    //     this.commentsService.getComments(i+1).subscribe(comments=> this.posts[i].comments=comments)
    //
    //   }})
    //   this.author=this.router.getCurrentNavigation().extras.state.author
    // })

    //це для отримання через квері
   // this.activatedRoute.queryParams.subscribe(value =>this.author=value.author)


  }

  ngOnInit(): void {
  }

}
