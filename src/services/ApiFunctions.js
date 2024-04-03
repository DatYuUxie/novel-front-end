import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
});

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json"
	}
}




// this function get all books from the database
export async function getAllBooks() {
    try {
        const result = await api.get('/book/read');
        return result.data;
    } catch (error) {
        throw new Error('Error fetching books');
    }
}

// this function delete book by id
export async function getBookById(bookId) {
    try {
        const result = await api.get(`/book/read/${bookId}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error delete room ${error.message}`);
    }
}