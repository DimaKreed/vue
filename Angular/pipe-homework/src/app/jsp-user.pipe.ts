import { Pipe, PipeTransform } from '@angular/core';
import  {UserModel} from "./user.model";

@Pipe({
  name: 'jSPUser'
})
export class JSPUserPipe implements PipeTransform {

  transform(value:UserModel): any {
  let changedUser=
    `<div>
    <ul>
        <li>${value.name}</li>
        <li>USERNAME: ${value.username}</li>
        <li>E-mail: ${value.email}</li>
    </ul>
    <hr>
  </div>`;
return changedUser;
  }

}
