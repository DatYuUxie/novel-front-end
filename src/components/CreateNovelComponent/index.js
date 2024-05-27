import { message, Spin } from 'antd';
import _ from 'lodash';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook, createImgLink } from '../../api/api';
import { UserContext } from '../../context/UserContext';
import './CreateNovelComponent.scss';

function CreateNovelComponent() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);

    const inputRef = useRef(null);
    const dafaultformData = {
        bookName: '',
        description: '',
        tag: '',
        author: '',
        poster: null,
        status: '',
    };
    const [formData, setFormData] = useState(dafaultformData);

    // Xử lý sự kiện khi người dùng chọn ảnh
    const handleImageChange = async (event) => {
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

    const handleOnChangeInput = (value, name) => {
        let _formData = _.cloneDeep(formData);
        _formData[name] = value;
        setFormData(_formData);
    };
    const validateForm = () => {
        const { bookName, description, tag, status } = formData;
        if (!bookName || !description || !tag || !status || !selectedImage2) {
            return false;
        }
        return true;
    };

    const handleCreateBook = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            message.error('Các trường không được để trống');
            return;
        }
        setIsSubmitting(true);
        try {
            let imgLink = await createImgLink(selectedImage2);
            let poster = imgLink.data.DT.path;
            let updatedFormData = { ...formData, poster: poster, writerID: user.account.userID };
            console.log(updatedFormData);
            setFormData(updatedFormData);
            let response = await createBook(updatedFormData);
            if (response.data.EC === 0) {
                message.success('Tạo sách thành công');
                navigate(`/author/my-novels/${user.account.userID}`);
            }
        } catch (error) {
            message.error('Tạo sách thất bại');
        }
        setIsSubmitting(false);
    };
    return (
        <div className="create-novel__account">
            <Spin spinning={isSubmitting}>
                <form onSubmit={handleCreateBook}>
                    <h3 className="settingsP">Thông tin sách:</h3>

                    <fieldset>
                        <div className="avatar-container">
                            <div className="avatar" onClick={handleButtonClick}>
                                <img
                                    src={
                                        selectedImage ||
                                        'https://th.bing.com/th?id=OIF.%2fkwTnvwmi6hew0Kql6O1DQ&rs=1&pid=ImgDetMain'
                                    }
                                    alt="Uploaded"
                                    className="user-img"
                                />
                            </div>

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
                            name="user_name"
                            value={formData.bookName}
                            onChange={(e) => handleOnChangeInput(e.target.value, 'bookName')}
                        />
                        <label htmlFor="description">
                            <h5>Mô tả:</h5>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={(e) => handleOnChangeInput(e.target.value, 'description')}
                        ></textarea>

                        <label htmlFor="type">
                            <h5>Thể loại:</h5>
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={formData.tag}
                            onChange={(e) => handleOnChangeInput(e.target.value, 'tag')}
                        >
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
                            value={formData.author}
                            onChange={(e) => handleOnChangeInput(e.target.value, 'author')}
                        />
                        <label htmlFor="status">
                            <h5>Trạng thái:</h5>
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={(e) => handleOnChangeInput(e.target.value, 'status')}
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
    );
}

export default CreateNovelComponent;
