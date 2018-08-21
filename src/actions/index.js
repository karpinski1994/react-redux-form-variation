export const usersFetched = (users) => ({
    type: 'FETCH_USERS_SUCCESS',
    users
});

export const removeUser = (users) => ({
    type: 'REMOVE_USER',
    users
});

export const addUser = (users) => ({
    type: 'ADD_USER',
    users
});
