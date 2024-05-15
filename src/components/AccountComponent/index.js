import React, { useState, useRef, useEffect } from 'react';
import { createImgLink, updateUserAccount, getInforUser } from '../../api/api';
import './Account.scss';
import { message } from 'antd';
import { useParams } from 'react-router-dom';

function AccountComponent() {
    const { userID } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const inputRef = useRef(null);
    const [formFields, setFormFields] = useState({
        username: '',
        birthday: '',
        gender: '',
        bio: '',
        email: '',
    });
    const handleGetUserInfor = async () => {
        try {
            const response = await getInforUser(userID);
            setFormFields({
                username: response.data.DT.username,
                birthday: response.data.DT.birthday,
                gender: response.data.DT.gender,
                bio: response.data.DT.bio,
                avatar: response.data.DT.avatar,
                email: response.data.DT.email,
            });
        } catch (error) {
            console.log('Failed to fetch user infor: ', error);
        }
    };
    useEffect(() => {
        handleGetUserInfor();
    }, []);
    const handleInputChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
        });
    };

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formFields);
        try {
            let imgLink = await createImgLink(selectedImage2);
            let avatar = imgLink.data.DT.path;
            const data = {
                ...formFields,
                userID: userID,
                avatar: avatar,
            };
            console.log(data);
            let res = await updateUserAccount(data);
            console.log(res);
            if (res.data.EC === 0) {
                message.success('Cập nhật thông tin thành công');
            }
        } catch (error) {
            console.log('Failed to update user profile: ', error);
            message.error('Cập nhật thông tin thất bại');
        }
    };
    return (
        <div className="account">
            <form action="" method="post" onSubmit={handleSubmit}>
                <h3 className="settingsP">Hồ sơ</h3>

                <fieldset>
                    <div className="avatar-container">
                        {/* Hiển thị ảnh đã chọn (nếu có) */}
                        <div className="avatar" onClick={handleButtonClick}>
                            <img
                                src={
                                    formFields.avatar || selectedImage
                                    // 'https://th.bing.com/th?id=OIF.%2fkwTnvwmi6hew0Kql6O1DQ&rs=1&pid=ImgDetMain'
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
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formFields.username}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="birthday">
                        <h5>Năm sinh:</h5>
                    </label>
                    <input
                        type="text"
                        id="birthday"
                        name="birthday"
                        value={formFields.birthday}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="gender">
                        <h5>Giới tính:</h5>
                    </label>
                    <select id="gender" name="gender" value={formFields.gender} onChange={handleInputChange}>
                        <option value="">Giới tính của bạn</option>

                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="secret">Bí mật</option>
                    </select>

                    <label htmlFor="bio">
                        <h5>Giới thiệu ngắn:</h5>
                    </label>
                    <textarea id="bio" name="bio" value={formFields.bio} onChange={handleInputChange}></textarea>

                    <label htmlFor="email">
                        <h5>Email:</h5>
                    </label>
                    <input type="email" id="email" name="email" value={formFields.email} onChange={handleInputChange} />
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
