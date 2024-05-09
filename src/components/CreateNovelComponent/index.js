import React, { useState, useRef, useContext } from 'react';
import './CreateNovelComponent.scss';
import { message, Select, Tag } from 'antd';
import { createBook, createImgLink } from '../../api/api';
import _, { set } from 'lodash';
import { UserContext } from '../../context/UserContext';
// const options = [
//     {
//         value: 'gold',
//     },
//     {
//         value: 'lime',
//     },
//     {
//         value: 'green',
//     },
//     {
//         value: 'cyan',
//     },
// ];
// const tagRender = (props) => {
//     const { label, value, closable, onClose } = props;
//     const onPreventMouseDown = (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//     };
//     return (
//         <Tag
//             color={value}
//             onMouseDown={onPreventMouseDown}
//             closable={closable}
//             onClose={onClose}
//             style={{
//                 marginInlineEnd: 4,
//             }}
//         >
//             {label}
//         </Tag>
//     );
// };
function CreateNovelComponent() {
    const { user } = useContext(UserContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);

    const inputRef = useRef(null);
    const dafaultformData = {
        bookName: '',
        desciption: '',
        tag: '',
        author: '',
        poster: null,
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
    const handleCreateBook = async (event) => {
        event.preventDefault();
        try {
            let imgLink = await createImgLink(selectedImage2);
            let poster = imgLink.data.DT.path;
            let updatedFormData = { ...formData, poster: poster, writerID: user.account.userID };
            setFormData(updatedFormData);
            let response = await createBook(updatedFormData);
            if (response.data.EC === 0) {
                message.success('Tạo sách thành công');
            }
        } catch (error) {
            message.error('Tạo sách thất bại');
        }
        setIsSubmitting(false);
    };
    return (
        <div className="create-novel__account">
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

                    <label htmlFor="desciption">
                        <h5>Mô tả:</h5>
                    </label>
                    <textarea
                        id="desciption"
                        name="desciption"
                        value={formData.desciption}
                        onChange={(e) => handleOnChangeInput(e.target.value, 'desciption')}
                    ></textarea>

                    <label htmlFor="gender">
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
                    </select>

                    {/* <label htmlFor="gender">
                        <h5>Loại sách:</h5>
                    </label>
                    <select id="type" name="type">
                        <option value="">Chọn loại sách</option>

                        <option value="own">Tự sáng tác</option>
                        <option value="trans">Sách dịch</option>
                    </select> */}

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
    );
}

export default CreateNovelComponent;
