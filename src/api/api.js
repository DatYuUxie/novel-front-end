import axios from 'axios';

// ===========   user api   ===========
const registerNewUser = async (email, password) => {
    try {
        return axios.post('http://localhost:5000/api/v1/register', {
            email,
            password,
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const login = async (email, password) => {
    try {
        return axios.post('http://localhost:5000/api/v1/login', {
            email,
            password,
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
// ===========   book api   ===========
const getBooks = async () => {
    try {
        return axios.get('http://localhost:5000/api/v1/book/read');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getBookById = async (id) => {
    try {
        return axios.get(`http://localhost:5000/api/v1/book/read/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
export { getBooks, getBookById, registerNewUser };
