import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser:UserModel;
  usersList: UserModel[] = [];


  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.userService.getUsers().subscribe(users => {this.usersList = users;
                                                    for (let i = 1; i <= this.usersList.length; i++) {

        this.postService.getPostsById(i).subscribe(posts => {// @ts-ignore
          this.usersList[i - 1].posts = posts;

                                                             for (let j = 1; j <= this.usersList[i - 1].posts.length; j++) {
            this.commentService.getComments(j).subscribe(comments => {
              // @ts-ignore
              this.usersList[i - 1].posts[j - 1].comments = comments;
            });
          }
        });

      }
    });
  }

  showInfo(div,button){
     if(div.classList[0]===('hidden'))
     {
       button.innerText='Hide full user info';
     }
     else {
       button.innerText='See full user info';
     }
    div.classList.toggle('hidden');
  }

  showUsers(userId){
    this.selectedUser=this.usersList[userId-1];
  }
//
// navigateToPosts(userId, username){
//     this.router.navigate([userId, 'posts'], {
//       relativeTo: this.activatedRoute,
//       state: {author: username}
//     });
// }
  ngOnInit(): void {

  }

}
