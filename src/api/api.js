import axios from 'axios';

// ===========   user api   ===========
const registerNewUser = async (email, password) => {
    return axios.post('http://localhost:5000/api/v1/register', {
        email,
        password,
    });
};
// ===========   book api   ===========
const getBooks = async () => {
    return axios.get('http://localhost:5000/api/v1/book/read');
};
const getBookById = async (id) => {
    return axios.get(`http://localhost:5000/api/v1/book/read/${id}`);
};
export { getBooks, getBookById, registerNewUser };
