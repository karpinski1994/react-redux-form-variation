import React, { Component } from 'react';
import './App.css';

import { AppHeader } from './components/AppHeader';
import  AddUserForm  from './components/User/AddUserForm';
import {UserTableComponent} from './components/User/UserTable';
import {
  connect
} from "react-redux";
import {
  usersFetched
} from "./actions";

class App extends Component {
  

// moze to gdzies wrabacc i w app renderowac np. tylko UsersCostamComponent
// ktory bedzie mial w sobie wszystko
  render() {
    return (
      <div>
        <AppHeader />
        <AddUserForm />
        <UserTableComponent/>
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

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
