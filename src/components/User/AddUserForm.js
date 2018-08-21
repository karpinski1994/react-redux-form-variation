import React from 'react';
import {Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import {addUser, usersFetched} from "../../actions/index";

import {store} from '../../store';

class AddUserForm extends React.Component {

        // przemyslec: button AddUser (pokazujacy formularz)
        // powinien byc tutaj czy w pliku Appki?
        // i czy powinien byc osobnym komponentem / funkcjonalnoscia
        
        // 4 sposoby na stylowanie - sprawdzic ktory tu wybrac
        

        
        constructor(props){
            super(props);
            this.state = {
                isFormVisible: false
            }
            this.toggleForm = this.toggleForm.bind(this);
        }

        toggleForm() {
            // console.log(this.state)
            this.setState({
                isFormVisible: !this.state.isFormVisible,
            }); 
            console.log(this.inputref)
        }
        resetFields() {
    
        }
        renderInput(field) { 
            return ( 
                <div className = "formInput" >
                <input type = "text"
                className = {
                    field.meta.error ? "error" : ""
                } { ...field.input}
                value = {
                    field.defaultValue
                }
                
                /> 
                <label > {
                    field.labelf
                } </label>

                {
                    field.meta.touched ? field.meta.error : ''
                } 
                </div>
            )
        }
        onSubmit(values){
            const currentUsers = store.getState().users;

            currentUsers.push({
                id: 12,
                name: values.name,
                email: values.email
            });
             this.props.addUser(currentUsers);
             this.setState({
                 isFormVisible: !this.state.isFormVisible,
             });
        }
        render() {
            
            const { handleSubmit } = this.props;
            return(
                <div>
                    <button onClick={this.toggleForm }><span>+</span>Add user</button>
                   
                    {
                        this.state.isFormVisible == true ? 
                        < form 
                        name = "addUser"
                        onSubmit = {
                            handleSubmit(this.onSubmit.bind(this))
                        } >

                         <Field
                         name = "userName"
                         label = "ID Użytkownika"
                         ref="TAKA_REFERENCJA"
                         component = {
                             this.renderInput
                         }/>

                         <Field
                         name = "email"
                         label = "E-mail..."
                         component = {this.renderInput}/>
                        
                        <button type="submit">Submit</button>
                        <button onClick={this.resetFields}>Reset fields</button>
                    </form> : "" }
                </div>
            )
        }
        
}
function validateForm(values) {
    const errors = {};
    
    if (!values.userName)
        errors.userName = "Insert user's name"
    if (!values.email) {
        errors.email = "Insert user's email"
    }else {
        console.log(values.email.toString().test(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/))
    }
         
    // if (values.email.test(pattern))
    //     errors.email = "Wrong email"
         

    return errors
}

export default reduxForm({
    validate: validateForm,
    form: 'addUser'
})(connect(null, { addUser
})(AddUserForm));