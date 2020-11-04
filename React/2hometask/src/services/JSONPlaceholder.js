import React, {Component} from 'react';

class JsonPlaceholder extends Component {
  URL='https://jsonplaceholder.typicode.com/users';
  PostUrl='https://jsonplaceholder.typicode.com/posts';
  CommentsUrl='https://jsonplaceholder.typicode.com/comments';
  async getUsers(){
    return (await fetch(this.URL)).json();
  }

  async getPostsOfUser(id){
    return (await fetch(`${this.URL}/${id}/posts`)).json();
  }
  async getAllPosts(){
    return (await fetch(this.PostUrl)).json();
  }
  async getCommentsOfPosts()
  {
    return (await fetch(this.CommentsUrl)).json();
  }
}

export default JsonPlaceholder;