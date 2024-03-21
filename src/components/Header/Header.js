import { Link } from 'react-router-dom';
import config from '../../config';

import Button from '../Button';
import img from '../../assets/img';
import Search from '../Search';
import Menu from '../Popper/Menu';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
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
import styles from './Header.module.scss';

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
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Hồ sơ',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Mua coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
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
                <div className={cx('title-group')}>
                    <Link to={config.home} className={cx('logo-link')}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FAhwhYIjaPus1tva6Pb8Upi4KBwRothf0vP_7-jRz4VNPgVmRHqWstkDyc3ATGRwPyo&usqp=CAU"
                            alt="logo"
                            className={cx('logo')}
                        />
                    </Link>

                    <Menu items={CATEGORY_ITEMS}>
                        <div className={cx('title-icon', 'bxh')}>
                            <FontAwesomeIcon icon={faBars} />
                            <h4 classNamze={cx('title-icon__name')}>Thể loại</h4>
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
                        {currentUser ? (
                            <>
                                <Link to={config.library} className={cx('title-icon', 'bxh')}>
                                    <FontAwesomeIcon icon={faQuran} />
                                    <h4 className={cx('title-icon__name')}>Kệ sách</h4>
                                </Link>
                                <Tippy delay={[0, 50]} content="Thông báo" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>

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
