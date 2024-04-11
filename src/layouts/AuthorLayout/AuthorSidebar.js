import { Menu, Button } from 'antd';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AuthorLayout.scss';
import {
    faBars,
    faBook,
    faColumns,
    faExclamationTriangle,
    faMoneyBill,
    faPenNib,
    faRectangleAd,
    faUserAlt,
    faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function AuthorSidebar() {
    const navigate = useNavigate();

    return (
        <aside className="sidebar-wrapper">
            <div
                className="brand"
                onClick={() => {
                    navigate('/');
                }}
            >
                <img src={logo} alt="" style={{ width: '80px' }} />
                <h5>Trang tác giả</h5>
            </div>
            {/* <hr /> */}
            <Menu theme="light" mode="inline">
                <Menu.Item key="1">
                    <NavLink to="/author/dashboard">
                        <FontAwesomeIcon icon={faColumns} />

                        <span className="nav-label">Tổng quan</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/author/my-novels">
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
                <Menu.Item className="menu-item-header" key="5">
                    <NavLink to="/admin/manage-user">
                        <FontAwesomeIcon icon={faRectangleAd} />

                        <span className="nav-label">Quảng cáo </span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </aside>
    );
}

export default AuthorSidebar;
