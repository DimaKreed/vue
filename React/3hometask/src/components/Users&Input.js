import React, {Component} from 'react';
import JsonPlaceholder from "../services/JSONPlaceholder";
import User from "./User";

class UsersInput extends Component {
  state={users:[],input:''};
  api=new JsonPlaceholder();
  async componentDidMount() {
    this.setState({users:await this.api.getUsers()})
  }

  render() {


    return (
      <div>

        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm" style={{backgroundColor:'#7FFFD4'}}>Enter user to search</span>
          </div>
          <input type="text"
                 className="form-control"
                 aria-label="Small"
                 aria-describedby="inputGroup-sizing-sm"
                 onChange={this.searchUsers}
                 value={this.state.input}/>
        </div>

        {this.state.users.map(value => { if(value.name.toLowerCase().startsWith(this.state.input.toLowerCase()))  return <User user={value} key={value.id}/>} )}
      </div>
    );
  }

  searchUsers =(event)=> {
    this.setState({input:event.target.value})
  }
}

export default UsersInput;