import React, { useState, useRef, useEffect, useContext } from 'react';
import './EditNovel.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook, createImgLink } from '../../api/api';
import { message, Spin } from 'antd';
import { UserContext } from '../../context/UserContext';

function EditNovel() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const inputRef = useRef(null);
    const { bookID } = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formFields, setFormFields] = useState({
        bookName: '',
        description: '',
        tag: '',
        author: '',
        poster: '',
        status: '',
    });
    const getBook = async () => {
        try {
            const response = await getBookById(bookID);
            setFormFields({
                bookName: response.data.DT.bookName,
                description: response.data.DT.description,
                tag: response.data.DT.tag,
                author: response.data.DT.author,
                poster: response.data.DT.poster,
                status: response.data.DT.status,
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
        setIsSubmitting(true);
        try {
            // Add the selectedImage to the formFields object
            let poster = formFields.poster;
            if (selectedImage2) {
                let imgLink = await createImgLink(selectedImage2);
                poster = imgLink.data.DT.path;
            }
            const data = {
                ...formFields,
                bookID: bookID,
                poster: poster,
            };
            console.log('data', data);
            let res = await updateBook(data);
            console.log(res);
            if (res.data.EC === 0) {
                message.success('Cập nhật sách thành công');
                navigate(`/author/my-novels/${user.account.userID}`);
            }
        } catch (error) {
            message.error('Cập nhật sách thất bại');
        }
        setIsSubmitting(false);
    };
    return (
        <div className="edit-novel-container">
            <div className="edit-novel-content">
                <div className="create-novel__account">
                    <Spin spinning={isSubmitting}>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <h3 className="settingsP">Thông tin sách:</h3>

                            <fieldset>
                                <div className="avatar-container">
                                    {/* Hiển thị ảnh đã chọn (nếu có) */}
                                    <div className="avatar" onClick={handleButtonClick}>
                                        <img
                                            src={selectedImage || formFields.poster}
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
                                    <option value="Ngôn tình">Ngôn tình</option>
                                    <option value="Kì ảo">Kì ảo</option>
                                    <option value="Lịch sử">Lịch sử</option>
                                    <option value="Huyền huyễn">Huyền huyễn</option>
                                    <option value="Khoa học">Khoa học</option>
                                    <option value="Đô thị">Đô thị</option>
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

                                <label htmlFor="status">
                                    <h5>Trạng thái:</h5>
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formFields.status}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Chọn trạng thái sách</option>
                                    <option value="Đang ra">Đang ra</option>
                                    <option value="Hoàn thành">Hoàn thành</option>
                                    <option value="Ẩn">Ẩn</option>
                                </select>
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
                    </Spin>
                </div>
            </div>
        </div>
    );
}

export default EditNovel;
