import React, {Component} from 'react';

class User extends Component {
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

          </div>
        </div>

      </div>
    );
  }
}

export default User;