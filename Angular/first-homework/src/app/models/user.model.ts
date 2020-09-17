import {PostModel} from "../../../../second-homework/src/app/models/post.model";

export interface UserModel {
  email:string;
  id:number;
  name:string;
  phone:string;
  username:string;
  website:string;
  posts:PostModel[]
}
