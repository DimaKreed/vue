import React, {Component} from 'react';

class JsonPlaceholder extends Component {
  UsersURL='https://jsonplaceholder.typicode.com/users';

  async getUsers(){
    return (await fetch(this.UsersURL)).json();
  }
}

export default JsonPlaceholder;