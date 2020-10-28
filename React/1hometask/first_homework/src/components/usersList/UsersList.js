import React, {Component} from 'react';
import OneUserView from "../oneUserView/OneUserView";
import {users} from "../../data/users";

class UsersList extends Component {
  render() {
    return (
      <div>
        {
          users.map((user) => {
            return(
              <div key={user.id}>
                {
                  <OneUserView user={user}/>
                }
              </div>

            )
          })
        }
      </div>
    );
  }
}

export default UsersList;