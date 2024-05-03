import axios from '../setup/axios';

// ===========   user api   ===========
const registerNewUser = async (email, password) => {
    try {
        return await axios.post('/api/v1/register', {
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
        return await axios.post('/api/v1/login', {
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
        return await axios.post('/api/v1/logout');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getUserAccount = async () => {
    try {
        return await axios.get('/api/v1/account');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
// ===========   book api   ===========
const getBooks = async () => {
    try {
        return await axios.get('/api/v1/book/read');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getBookById = async (id) => {
    try {
        return await axios.get(`/api/v1/book/read/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getBookByUserId = async (id) => {
    try {
        return axios.get(`/api/v1/book/by-user/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const createBook = async (data) => {
    try {
        return await axios.post('/api/v1/book/create', data);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const createImgLink = async (data) => {
    try {
        const formData = new FormData();
        formData.append('poster', data);
        return await axios.post('/api/v1/book/create-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Đặt kiểu dữ liệu là multipart/form-data
            },
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

// ===========   chapter api   ===========
const getChapterbyBookId = async (id) => {
    try {
        return axios.get(`/api/v1/chapter/readAll/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getChapterbyId = async (id) => {
    try {
        return axios.get(`/api/v1/chapter/read/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const getDraftChapter = async (id) => {
    try {
        return axios.get(`/api/v1/chapter/draft/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const createChapter = async (data) => {
    try {
        return axios.post('/api/v1/chapter/create', data);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
const updatepublishChapter = async (id) => {
    try {
        return axios.put(`/api/v1/chapter/publish/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export {
    getBooks,
    getBookById,
    registerNewUser,
    login,
    logout,
    getUserAccount,
    createBook,
    createImgLink,
    getChapterbyBookId,
    getChapterbyId,
    createChapter,
    getBookByUserId,
    getDraftChapter,
    updatepublishChapter,
};
