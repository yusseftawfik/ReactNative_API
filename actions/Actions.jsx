import axios from "axios";
const baseURL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    let users = [];
    try {
        const response = await axios.get(baseURL)
        users = response.data;
    } catch (error) {
        console.log(error)
    }
    return (
        {
            type: 'USERS_LIST',
            payload: users,
        }
    )
}

export const getUsersDetails = async (id) => {
    let user = {};
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        user = response.data;
    } catch (error) {
        console.log(error)
    }
    return (
        {
            type: 'USER_DETAILS',
            payload: user,
        }
    )
}

export const clearDetails = () => {
    return (
        {
            type: 'CLEAR_DETAILS',
            payload: {},
        }
    )
}