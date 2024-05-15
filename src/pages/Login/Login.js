import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import './Login.scss';
import newLogo2 from '../../assets/img/newLogo2.png';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/api';
import logo from '../../assets/img/logo.png';
import { UserContext } from '../../context/UserContext';
import './Login.scss';

const onFinish = (values) => {
    console.log('Success:', values);
};

const Login = (props) => {
    const { loginContext } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (!email) {
            message.error('Email không được để trống!');
            return;
        }
        if (!password) {
            message.error('Mật khẩu không được để trống!');
            return;
        }

        let response = await login(email, password);
        if (response && response.data && +response.data.EC === 0) {
            // success
            let userID = response.data.DT.userID;
            let role = response.data.DT.role;
            let email = response.data.DT.email;
            let username = response.data.DT.username;
            let token = response.data.DT.access_token;
            let avatar = response.data.DT.avatar;
            let data = {
                isAuthenticated: true,
                token: token,
                account: { role, email, username, userID, avatar },
            };
            // sessionStorage.setItem('account', JSON.stringify(data));
            localStorage.setItem('jwt', token);
            loginContext(data);
            if (role === 'ADMIN') {
                navigate('/admin/dashboard');
            }
            if (role === 'USER') {
                navigate('/');
            }
            if (role === 'MODERATOR') {
                // navigate('/writers');
            }
            // window.location.reload();

            //redux
        }
        if (response && response.data && +response.data.EC !== 0) {
            // wrong password
            message.error(response.data.EM);
            return;
        }
    };

    const handlePressEnter = (e) => {
        if (e.key === 'Enter' && e.charCode === 13) {
            // handleLogin();
        }
    };

    // useEffect(() => {
    //     let session = sessionStorage.getItem('account');
    //     if (session) {
    //         navigate('/users');
    //     }
    // }, []);
    return (
        <div className="login-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <div className="centered-image">
                    <img src={newLogo2} width={200} />
                </div>

                <div className="centered-welcome">
                    <div className="title">Chào mừng NovelVerse!</div>
                </div>

                <div className="centered-become">
                    <div className="title">Đọc những tác phẩm yêu thích của bạn.</div>
                </div>

                <Form.Item
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập email đăng nhập của bạn!',
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
                            message: 'Hãy nhập mật khẩu của bạn!',
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
                        onKeyPress={(e) => {
                            handlePressEnter(e);
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{ float: 'left' }}>Ghi nhớ</Checkbox>
                    </Form.Item>

                    <a style={{ float: 'right' }} className="login-form-forgot" href="/">
                        Quên mật khẩu
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: '100%', marginBottom: '10px' }}
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </Button>
                    Chưa có tài khoản? <Link to="/register">Đăng kí ngay!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
