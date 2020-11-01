import React, {Component} from 'react';

class JsonPlaceholder extends Component {
  URL='https://jsonplaceholder.typicode.com/users';
  async getUsers(){
    return (await fetch(this.URL)).json();
  }
}

export default JsonPlaceholder;