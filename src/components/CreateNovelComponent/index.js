import React, { useState, useRef } from 'react';
import './CreateNovelComponent.scss';
import { Select, Tag } from 'antd';
const options = [
    {
        value: 'gold',
    },
    {
        value: 'lime',
    },
    {
        value: 'green',
    },
    {
        value: 'cyan',
    },
];
const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginInlineEnd: 4,
            }}
        >
            {label}
        </Tag>
    );
};
function CreateNovelComponent() {
    const [selectedImage, setSelectedImage] = useState(null);
    const inputRef = useRef(null);

    // Xử lý sự kiện khi người dùng chọn ảnh
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
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
    return (
        <div className="create-novel__account">
            <form action="" method="post">
                <h3 className="settingsP">Thông tin sách:</h3>

                <fieldset>
                    <div className="avatar-container">
                        {/* Hiển thị ảnh đã chọn (nếu có) */}
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
                    <input type="text" id="name" name="user_name" />

                    <label htmlFor="description">
                        <h5>Mô tả:</h5>
                    </label>
                    <textarea id="description" name="description"></textarea>

                    <label htmlFor="gender">
                        <h5>Thể loại:</h5>
                    </label>
                    <select id="type" name="type">
                        <option value="">Chọn thể loại sáng tác</option>

                        <option value="own">Tiên hiệp</option>
                        <option value="trans">Quân sự</option>
                    </select>

                    <label htmlFor="gender">
                        <h5>Loại sách:</h5>
                    </label>
                    <select id="type" name="type">
                        <option value="">Chọn loại sách</option>

                        <option value="own">Tự sáng tác</option>
                        <option value="trans">Sách dịch</option>
                    </select>

                    <label htmlFor="author" style={{ display: 'flex' }}>
                        <h5>Tên tác giả</h5> <p style={{ marginLeft: '4px' }}> (nếu là sách dịch):</p>
                    </label>
                    <input type="text" id="author" name="author_name" />

                    <label htmlFor="gender">
                        <h5>Danh mục tag:</h5>
                    </label>
                    <Select
                        mode="multiple"
                        tagRender={tagRender}
                        defaultValue={[]}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                    />
                </fieldset>

                <div className="btns-box">
                    <button className="btn-save" type="submit">
                        Lưu
                    </button>
                    <button className="btn-cancel">Hủy</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNovelComponent;
