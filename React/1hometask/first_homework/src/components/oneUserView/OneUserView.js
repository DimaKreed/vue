import React, {Component} from 'react';

class OneUserView extends Component {
  state={status:this.props.user.status}
constructor(props) {
  super(props);
}

changeStatus=(user)=>{
    user.status=!user.status;
  this.setState({status:!this.props.user.status})
  }

  render() {
  let {user}=this.props;
    return (
     <div>
       {
         !user.status&&(<div><p>Name: <b>{user.name}</b> Age: {user.age} </p></div>)
       }
       {
         user.status&&(<div><p>Name: {user.name} Age: {user.age}</p></div>)
       }
       <button onClick={()=>{return this.changeStatus(user);}}>Change status</button>
     </div>
    );
  }
}

export default OneUserView;