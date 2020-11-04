import React, {Component} from 'react';
import JsonPlaceholder from "../../services/JSONPlaceholder";
import Post from "../post/Post";

class User extends Component {

state={posts:[],btnStatus:true}
api=new JsonPlaceholder();



  async getPosts(id){
  this.setState({posts: await this.api.getPostsOfUser(id),btnStatus:false});

  console.log(this.state.posts)
}

  render() {
    let {id,
      name,
      username,
      email,
      address:{street,suite,city,zipcode,
        geo:{lat,lng}},
      phone,
      website,
      company:{name:companyName,catchPhrase,bs}} =this.props.user;
  let btnStatus=true;


    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
            <p className="card-text">
              E-mail: {email}<br/>
              Phone:{phone}<br/>
              Website:{website}
            </p>

            {
              this.state.btnStatus&&(<button
                type='button'
                className='btn btn-primary'
                onClick={()=>{this.getPosts(id)}}
              >Show posts</button>)
            }
            {
              !this.state.btnStatus&&(<button
                type='button'
                className='btn btn-primary'
                onClick={()=>{this.setState({posts:[],btnStatus:true})}}
              >Hide posts</button>)
            }
          </div>
        </div>
          {this.state.posts.map(value =><Post posts={value} key={value.id}/>)}

      </div>
    );
  }
}

export default User;