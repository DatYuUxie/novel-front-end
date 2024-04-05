import { Menu, Button } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AdminLayout.scss';
import { faBars, faBook, faColumns, faExclamationTriangle, faMoneyBill, faPenNib, faUserAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function AdminSidebar() {
    return (
        <aside className="sidebar-wrapper">
            <div className="brand">
                <img src={logo} alt="" style={{ width: '80px' }} />
                <h5>Admin Dashboard</h5>
            </div>
            {/* <hr /> */}
            <Menu theme="light" mode="inline">
                <Menu.Item key="1">
                    <NavLink to="/dashboard">
                        <FontAwesomeIcon icon={faColumns} />

                        <span className="nav-label">Tổng quan</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/admin/manage-books">
                    <FontAwesomeIcon icon={faBook} />

                        <span className="nav-label">Quản lí sách, truyện</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/billing">
                    <FontAwesomeIcon icon={faUserEdit} />

                        <span className="nav-label">Quản lí tác giả </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to="/admin/manage-user">
                    <FontAwesomeIcon icon={faUserAlt} />

                        <span className="nav-label">Quản lí người dùng </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item className="menu-item-header" key="5">
                    <NavLink to="/admin/manage-user">
                    <FontAwesomeIcon icon={faUserAlt} />

                        <span className="nav-label">Quản lí người dùng </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                    <NavLink to="/profile">
                    <FontAwesomeIcon icon={faMoneyBill} />

                        <span className="nav-label">Quản lí thanh toán </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="7">
                    <NavLink to="/sign-in">
                    <FontAwesomeIcon icon={faPenNib} />

                        <span className="nav-label">Sách, truyện cần xét duyệt </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="8">
                    <NavLink to="/sign-up">
                    <FontAwesomeIcon icon={faExclamationTriangle} />

                        <span className="nav-label">Báo cáo vi phạm </span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </aside>
    );
}

export default AdminSidebar;
