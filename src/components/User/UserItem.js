import React from 'react';
import {
  connect
} from "react-redux";
import {
  removeUser
} from "../../actions/index";

class UserItem extends React.Component {
    constructor(props) {
      super();
    }

    removeUser(id) {
      const users = this.props.users;
      const updatedUsers = users.filter(user => {
        return user.id !== id
      });
      this.props.removeUser(updatedUsers);
    }

    render() {
      return ( 
        
          <li className = "item" >
            <div className = "table__row" >
              <div className="table__col">
                id: {this.props.id}
              </div>
              <div className="table__col">
                name: {this.props.name}
              </div>
              <div className="table__col">
              email: {this.props.email} 
              </div>
              <button onClick={() => this.removeUser(this.props.id)}>X</button>
            </div>
          </li>
      );
    };
};
const mapStateToProps = (state) => {
  return {
    users: state.users // (1)
  }
};
const mapDispatchToProps = {
  removeUser
}; // (2)
export const UserItemComponent = connect(mapStateToProps, mapDispatchToProps)(UserItem);