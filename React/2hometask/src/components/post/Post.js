import React, {Component} from 'react';


  class Post extends Component {


render() {
  let {userId,id,title,body}= this.props.posts;

  return (
      <div>
        <h6>{title}</h6>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;