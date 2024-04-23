import { Link } from 'react-router-dom';
import config from '../../config';

import Button from '../Button';
import img from '../../assets/img';
import Search from '../Search';
import Menu from '../Popper/Menu';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Row, Col, List, Avatar, Input, Drawer, Typography,   Dropdown,
} from 'antd';

import { SearchOutlined, StarOutlined, TwitterOutlined, FacebookFilled } from '@ant-design/icons';
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
} from '@fortawesome/free-solid-svg-icons';
import { InboxIcon } from '../../assets/icon';
import classNames from 'classnames/bind';
import styles from './AdminHeader.module.scss';

const cx = classNames.bind(styles);

const notifyData = [
    {
        title: 'New message from Sophie',
        description: <>2 days ago</>,

        avatar: (
            <Avatar
                className={cx('shape-avatar')}
                shape="square"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPa559GHFA8zlQYixUpRG5eTx0XNfXcm1bISubnXfW4_nBzsStFPnA7RXVLHpEDEio9c&usqp=CAU"
            ></Avatar>
        ),
    },
    {
        title: 'New album by Travis Scott',
        description: <>2 days ago</>,

        avatar: (
            <Avatar
                className={cx('shape-avatar')}
                shape="square"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPa559GHFA8zlQYixUpRG5eTx0XNfXcm1bISubnXfW4_nBzsStFPnA7RXVLHpEDEio9c&usqp=CAU"
            ></Avatar>
        ),
    },
    {
        title: 'Payment completed',
        description: <>2 days ago</>,
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

function AdminHeader() {
    const currentUser = true;

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
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/account/setting',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
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
                <p>.</p>
                <Search />

                <div className={cx('title-group')}>
                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
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

export default AdminHeader;
