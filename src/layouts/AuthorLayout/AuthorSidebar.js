import { Menu } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AuthorLayout.scss';
import { faBook, faColumns, faMoneyBill, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function AuthorSidebar() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    console.log("userrrrrrrrrr",user);
    return (
        <aside className="sidebar-wrapper">
            {/* <div
                className="brand"
                onClick={() => {
                    navigate('/');
                }}
            >
                <img src={logo} alt="" style={{ width: '80px' }} />
            </div> */}
            {/* <hr /> */}
            <div className='front'> good morning :3</div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <NavLink to="/author/dashboard">
                        <FontAwesomeIcon icon={faColumns} />

                        <span className="nav-label">Tổng quan</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to={`/author/my-novels/${user.account.userID}`}>
                        <FontAwesomeIcon icon={faBook} />
                        <span className="nav-label">Tác phẩm của bạn</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/author/feedbacks">
                        <FontAwesomeIcon icon={faUserEdit} />
                        <span className="nav-label">Phản hồi </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to="/author/income">
                        <FontAwesomeIcon icon={faMoneyBill} />

                        <span className="nav-label">Thu nhập </span>
                    </NavLink>
                </Menu.Item>
                {/* <Menu.Item className="menu-item-header" key="5">
                    <NavLink to="/admin/manage-user">
                        <FontAwesomeIcon icon={faRectangleAd} />

                        <span className="nav-label">Quảng cáo </span>
                    </NavLink>
                </Menu.Item> */}
            </Menu>
        </aside>
    );
}

export default AuthorSidebar;
