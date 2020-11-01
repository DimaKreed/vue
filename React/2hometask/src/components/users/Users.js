import React, {Component} from 'react';
import JsonPlaceholder from "../../services/JSONPlaceholder";
import User from "../user/User";

class Users extends Component {
  api=new JsonPlaceholder();
  state={users:[]};

 async componentDidMount() {
   this.setState({users:await this.api.getUsers()})
  }

  render() {
    return (
      <div>
        {this.state.users.map(value => <User user={value} key={value.id}/>)}
      </div>
    );
  }
}

export default Users;