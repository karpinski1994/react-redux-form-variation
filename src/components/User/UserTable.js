import React from 'react';

import  { UserItemComponent }  from './UserItem';
import { UserTableHeader } from './UserTableHeader';
import {
    usersFetched
} from "../../actions/index";
import {
    connect
} from "react-redux";
class UserTable extends React.Component {
    
    componentDidMount() {
        //wywalic do app.js i do store
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.props.usersFetched(json)
                console.log(json)
            });
    }

    // zrobic key - przyklad z [1,2,3,4,5]

    userToUserItem = user => {
        const key = 0;
        const id = user.id;
        const name = user.name;
        const email = user.email;
        return <UserItemComponent id = {id} name = {name} email = {email}/>;
    };

    render() {
        return (
            <div>
                <UserTableHeader field1="lp" field2="user" field3="e-mail" />
                <ol className="table">
                    {this.props.users.map(user => this.userToUserItem(user))}
                </ol>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};
const mapDispatchToProps = {
    usersFetched
};

export const UserTableComponent = connect(mapStateToProps, mapDispatchToProps)(UserTable);