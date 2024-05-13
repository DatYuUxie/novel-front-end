import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import newLogo2 from '../../assets/img/newLogo2.png';

import Button from '../Button';
import img from '../../assets/img';
import Search from '../Search';
import Menu from '../Popper/Menu';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Row, Col, List, Avatar, Input, Drawer, Typography,   Dropdown,
} from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faQuran,
    faCoins,
    faBell,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
    faPenNib,
} from '@fortawesome/free-solid-svg-icons';
import { InboxIcon } from '../../assets/icon';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { message } from 'antd';
import { UserContext } from '../../context/UserContext';
import { logout } from '../../api/api';

const cx = classNames.bind(styles);

const CATEGORY_ITEMS = [
    {
        title: 'Tất cả',
    },
    {
        title: 'Kì ảo',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        title: 'Tiên hiệp',
    },
    {
        title: 'Ngôn tình',
    },
    {
        title: 'Huyền huyễn',
    },
    {
        title: 'Khoa học',
    },
];

function Header() {
    const { user, logoutContext } = useContext(UserContext);
    const navigate = useNavigate();
    // const currentUser = false;
    const handleLogout = async () => {
        let res = await logout();
        // console.log('check logout', res);
        if (res && res.data && res.data.EC === 0) {
            localStorage.removeItem('jwt'); // clear the local storage
            logoutContext();
            message.success('Logout successful!');
            navigate('/login');
        } else {
            message.error('Logout failed!');
        }
    };

    const notifyData = [
        {
            title: 'Cầu ma ra chương mới',
            description: <>3 ngày trước</>,
    
            avatar: (
                <Avatar
                    className={cx('shape-avatar')}
                    shape="square"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPa559GHFA8zlQYixUpRG5eTx0XNfXcm1bISubnXfW4_nBzsStFPnA7RXVLHpEDEio9c&usqp=CAU"
                ></Avatar>
            ),
        },
        {
            title: 'Tiên nghịch ra chương mới',
            description: <>3 ngày trước</>,
    
            avatar: (
                <Avatar
                    className={cx('shape-avatar')}
                    shape="square"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPa559GHFA8zlQYixUpRG5eTx0XNfXcm1bISubnXfW4_nBzsStFPnA7RXVLHpEDEio9c&usqp=CAU"
                ></Avatar>
            ),
        },
        {
            title: 'Thanh toán premium thành công',
            description: <>3 ngày trước</>,
            avatar: (
                <Avatar
                    className={cx('shape-avatar')}
                    shape="square"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPa559GHFA8zlQYixUpRG5eTx0XNfXcm1bISubnXfW4_nBzsStFPnA7RXVLHpEDEio9c&usqp=CAU"
                ></Avatar>
            ),
        },
    ];
    
    const notifyMenu = (
        <List
            min-width="100%"
            className={cx('header-notifications-dropdown')}
            itemLayout="horizontal"
            dataSource={notifyData}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar shape="square" src={item.avatar} />}
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    );
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Coin',
            to: '/account/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Hồ sơ',
            to: '/account/:userId',
        },
        {
            icon: <FontAwesomeIcon icon={faPenNib} />,
            title: 'Sáng tác',
            to: '/author/dashboard',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/account/setting',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            onClick: () => {
                handleLogout();
            },
            separate: true,
        },
    ];

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title-group')}>
                    <Link to={config.home} className={cx('logo-link')}>
                        <img
                            src={newLogo2}
                            alt="logo"
                            className={cx('logo')}
                        />
                    </Link>

                    <Menu items={CATEGORY_ITEMS}>
                        <div className={cx('title-icon', 'bxh')}>
                            <FontAwesomeIcon icon={faBars} />
                            <h4 className={cx('title-icon__name')}>Thể loại</h4>
                        </div>
                    </Menu>

                    <Link to={config.rankings} className={cx('title-icon', 'bxh')}>
                        <h4 className={cx('title-icon__name')}>Bảng xếp hạng</h4>
                    </Link>
                </div>

                <Search />

                <div className={cx('title-group')}>
                    <Link to={config.forum} className={cx('title-icon')}>
                        <h4 className={cx('title-icon__name')}>Diễn đàn</h4>
                    </Link>

                    <div className={cx('actions')}>
                        {user && user.isAuthenticated === true ? (
                            <>
                                <Link to={config.library} className={cx('title-icon', 'bxh')}>
                                    <FontAwesomeIcon icon={faQuran} />
                                    <h4 className={cx('title-icon__name')}>Kệ sách</h4>
                                </Link>
                                <Dropdown overlay={notifyMenu} trigger={['click']}>
                                    <a href="#pablo" placement="bottomRight" className={cx('ant-dropdown-link')} onClick={(e) => e.preventDefault()}>
                                        <Tippy delay={[0, 50]} content="Thông báo" placement="bottom">
                                            <button className={cx('action-btn')}>
                                                <InboxIcon />
                                                <span className={cx('badge')}>12</span>
                                            </button>
                                        </Tippy>
                                    </a>
                                </Dropdown>

                                <Menu items={userMenu} onChange={handleMenuChange}>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FAhwhYIjaPus1tva6Pb8Upi4KBwRothf0vP_7-jRz4VNPgVmRHqWstkDyc3ATGRwPyo&usqp=CAU"
                                        alt="logo"
                                        className={cx('user-avatar')}
                                    />
                                </Menu>
                            </>
                        ) : (
                            <>
                                <div className={cx('bxh')}>
                                    <Button to={config.login} primary2 small>
                                        Đăng nhập
                                    </Button>
                                    <Button to={config.register} primary2 small>
                                        Đăng kí
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
