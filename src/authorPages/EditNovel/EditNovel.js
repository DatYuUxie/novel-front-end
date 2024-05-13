import React, { useState, useRef, useEffect, useContext } from 'react';
import './EditNovel.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook, createImgLink } from '../../api/api';
import { message } from 'antd';
import { UserContext } from '../../context/UserContext';

function EditNovel() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const inputRef = useRef(null);
    const { bookID } = useParams();
    const [book, setBook] = useState(null);
    const [formFields, setFormFields] = useState({
        bookName: '',
        description: '',
        tag: '',
        author: '',
        poster: '',
    });
    const getBook = async () => {
        try {
            const response = await getBookById(bookID);
            setBook(response.data.DT);
            setFormFields({
                bookName: response.data.DT.bookName,
                description: response.data.DT.desciption,
                tag: response.data.DT.tag,
                author: response.data.DT.author,
                poster: response.data.DT.poster,
            });
        } catch (error) {
            console.log('Failed to fetch book: ', error);
        }
    };
    useEffect(() => {
        getBook();
    }, []);
    // console.log(book);

    // Xử lý sự kiện khi người dùng chọn ảnh
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage2(file);
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result); // Lưu trữ ảnh đã chọn dưới dạng URL dữ liệu
            };
            reader.readAsDataURL(file);
        }
    };

    // Mô phỏng sự kiện click cho input type="file"
    const handleButtonClick = () => {
        inputRef.current.click();
    };
    const handleInputChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Add the selectedImage to the formFields object
            let imgLink = await createImgLink(selectedImage2);
            let poster = imgLink.data.DT.path;
            console.log('img link', poster);
            const data = {
                ...formFields,
                bookID: bookID,
                poster: poster,
            };
            console.log(data);
            let res = await updateBook(data);
            console.log(res);
            if (res.data.EC === 0) {
                message.success('Cập nhật sách thành công');
                navigate(`/author/my-novels/${user.account.userId}`);
            }
        } catch (error) {
            message.error('Cập nhật sách thất bại');
        }
    };
    return (
        <div className="edit-novel-container">
            <div className="edit-novel-content">
                <div className="create-novel__account">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h3 className="settingsP">Thông tin sách:</h3>

                        <fieldset>
                            <div className="avatar-container">
                                {/* Hiển thị ảnh đã chọn (nếu có) */}
                                <div className="avatar" onClick={handleButtonClick}>
                                    <img
                                        src={
                                            selectedImage ||
                                            // 'https://th.bing.com/th?id=OIF.%2fkwTnvwmi6hew0Kql6O1DQ&rs=1&pid=ImgDetMain'
                                            formFields.poster
                                        }
                                        alt="Uploaded"
                                        className="user-img"
                                    />
                                </div>
                                {/* Input để chọn tệp ảnh */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                    ref={inputRef}
                                />
                                <p className="note">ấn vào ảnh trên để upload ảnh bìa, file </p>
                                <p className="note"> ảnh không nặng quá 1MB</p>
                            </div>

                            <label htmlFor="name">
                                <h5>Tên sách:</h5>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="bookName"
                                value={formFields.bookName}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="description">
                                <h5>Mô tả:</h5>
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formFields.description}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="gender">
                                <h5>Thể loại:</h5>
                            </label>
                            <select id="tag" name="tag" value={formFields.tag} onChange={handleInputChange}>
                                <option value="">Chọn thể loại sáng tác</option>

                                <option value="Tiên hiệp">Tiên hiệp</option>
                                <option value="Quân sự">Quân sự</option>
                            </select>

                            <label htmlFor="author" style={{ display: 'flex' }}>
                                <h5>Tên tác giả</h5> <p style={{ marginLeft: '4px' }}> (nếu là sách dịch):</p>
                            </label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={formFields.author}
                                onChange={handleInputChange}
                            />

                            {/* <label htmlFor="gender">
                                <h5>Trạng thái:</h5>
                            </label>
                            <select id="type" name="type">
                                <option value="">Chọn trạng thái sách</option>

                                <option value="progressing">Đang ra</option>
                                <option value="finish">Hoàn thành</option>
                                <option value="hidden">Ẩn</option>
                            </select> */}
                        </fieldset>

                        <div className="btns-box">
                            <button className="btn-save" type="submit">
                                Lưu
                            </button>
                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={() => {
                                    window.history.back();
                                }}
                            >
                                Hủy
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditNovel;
