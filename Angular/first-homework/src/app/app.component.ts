import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {UserModel} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService:UserService) {
    this.userService.getUsers().subscribe(users=>{
      this.users=users;

    })

  }

  title = 'first-homework';
  users:UserModel[]=[];
}
