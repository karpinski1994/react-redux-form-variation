import { combineReducers } from 'redux';
import { users } from './users';
import { reducer as reducerForm } from 'redux-form';

export default combineReducers({
    users,
    form:reducerForm
});