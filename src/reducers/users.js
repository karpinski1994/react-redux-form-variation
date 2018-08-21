export const users = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USERS_SUCCESS':
            return [
                ...action.users
            ]
        case 'REMOVE_USER': 
            return [
                ...action.users
            ]
        case 'ADD_USER':
            return [
                ...action.users
            ]
        default:
            return state;
    }
}