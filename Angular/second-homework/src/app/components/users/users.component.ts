import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../../../../first-homework/src/app/models/user.model";
import {PostService} from "../../services/post.service";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


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


  ngOnInit(): void {

  }

}
