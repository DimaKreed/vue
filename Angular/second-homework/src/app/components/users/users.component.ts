import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../../../../first-homework/src/app/models/user.model";
import {PostService} from "../../services/post.service";
import {PostModel} from "../../models/post.model";
import {CommentService} from "../../services/comment.service";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

@ViewChild(PostsComponent) private postsComponent:PostsComponent;

  usersList:UserModel[]=[];


  constructor(private userService:UserService,private postService:PostService,private commentService:CommentService) {
    this.userService.getUsers().subscribe(users => {this.usersList = users;
      for (let i = 1; i <= 10; i++) {

        this.postService.getPosts(i).subscribe(posts => {this.usersList[i - 1].posts = posts;

          for (let j = 1; j <=10; j++) {
            this.commentService.getComments(j).subscribe(comments => {
              this.usersList[i-1].posts[j-1].comments=comments;
            })
          }
        })

      }
    });

  }
  sendPosts(id){
    //this.postsComponent.posts=this.usersList[id-1].posts;
    //console.log(this.postsComponent.posts)
    console.log(this.postsComponent.ar)
  }

  ngOnInit(): void {

  }

}
