import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerNewUser } from '../../api/api';
import newLogo2 from '../../assets/img/newLogo2.png';
import './Register.scss';

const onFinish = (values) => {
    console.log('Success:', values);
};
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const isValidInput = () => {
        if (email === '') {
            message.error('Email không được để trống!');
            return false;
        }
        if (password === '') {
            message.error('Mật khẩu không được để trống!');
            return false;
        }
        if (confirmPassword === '') {
            message.error('Xác nhận mật khẩu không được để trống!');
            return false;
        }
        if (password !== confirmPassword) {
            message.error('Xác nhận mật khẩu không khớp!');
            return false;
        }
        const regs = /\S+@\S+\.\S+/;
        if (!regs.test(email)) {
            message.error('Email không hợp lệ!');
            return false;
        }
        return true;
    };
    const handleRegister = async () => {
        let isValid = isValidInput();
        if (isValid === true) {
            let response = await registerNewUser(email, password);
            let serverData = response.data;
            if (+serverData.EC === 0) {
                message.success(serverData.EM);
                navigate('/login');
            } else {
                message.error(serverData.EM);
            }
        }
    };

    return (
        <div className="register-container">
            <Form
                name="normal_login"
                className="register-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <div className="centered-image">
                    <img src={newLogo2} width={200} alt="Logo" />
                </div>

                <div className="centered-welcome">
                    <div className="title">Chào mừng NovelVerse!</div>
                </div>

                <div className="centered-become">
                    <div className="title">Tạo tài khoản NovelVerse.</div>
                </div>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        size="large"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        size="large"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="confirm-password"
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your Password!',
                        },
                    ]}
                >
                    <Input
                        size="large"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="register-form-button"
                        style={{ width: '100%', marginBottom: '10px' }}
                        onClick={() => {
                            handleRegister();
                        }}
                    >
                        Đăng kí
                    </Button>
                    Đã có tài khoản? <Link to="/login">Đăng nhập!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
