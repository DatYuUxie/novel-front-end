import React, { useState, useRef } from 'react';
import './Account.scss';

function AccountComponent() {
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
        <div className="account">
            <form action="" method="post">
                <h3 className="settingsP">Hồ sơ</h3>

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
                        <p className="note">ấn vào ảnh trên để đổi ảnh đại diện, file </p>
                        <p className="note"> ảnh không nặng quá 1MB</p>
                    </div>

                    <label htmlFor="name">
                        <h5>Tên hiển thị:</h5>
                    </label>
                    <input type="text" id="name" name="user_name" />

                    <label htmlFor="birthday">
                        <h5>Năm sinh:</h5>
                    </label>
                    <input type="text" id="birthday" name="birthday" />

                    <label htmlFor="gender">
                        <h5>Giới tính:</h5>
                    </label>
                    <select id="gender" name="gender">
                        <option value="">Giới tính của bạn</option>

                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="secret">Bí mật</option>
                    </select>

                    <label htmlFor="bio">
                        <h5>Giới thiệu ngắn:</h5>
                    </label>
                    <textarea id="bio" name="user_bio"></textarea>

                    <label htmlFor="email">
                        <h5>Email:</h5>
                    </label>
                    <input type="email" id="mail" name="user_email" />
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

export default AccountComponent;
