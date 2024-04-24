import axios from '../setup/axios';

// ===========   user api   ===========
const registerNewUser = async (email, password) => {
    try {
        return axios.post('/api/v1/register', {
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
        return axios.post('/api/v1/login', {
            email,
            password,
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const logout = async () => {
    try {
        return axios.post('/api/v1/logout');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getUserAccount = async () => {
    try {
        return axios.get('/api/v1/account');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
// ===========   book api   ===========
const getBooks = async () => {
    try {
        return axios.get('/api/v1/book/read');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getBookById = async (id) => {
    try {
        return axios.get(`/api/v1/book/read/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const createBook = async (data) => {
    try {
        return axios.post('/api/v1/book/create', data);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const createImgLink = async (data) => {
    try {
        const formData = new FormData();
        formData.append('poster', data);
        return axios.post('/api/v1/book/create-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Đặt kiểu dữ liệu là multipart/form-data
            },
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export { getBooks, getBookById, registerNewUser, login, logout, getUserAccount, createBook };
