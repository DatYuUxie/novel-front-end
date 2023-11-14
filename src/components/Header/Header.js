import { Link } from 'react-router-dom';
import config from '../../config';

import Button from '../Button';
import img from '../../assets/img';
import Search from '../Search';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faQuran,
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





function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title-icon')}>
                    <Link to={config.home} className={cx('logo-link')}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FAhwhYIjaPus1tva6Pb8Upi4KBwRothf0vP_7-jRz4VNPgVmRHqWstkDyc3ATGRwPyo&usqp=CAU"
                            alt="logo"
                            className={cx('logo')}
                        />
                    </Link>

                    <Link to={config.home} className={cx('title-icon', 'bxh')}>
                        <FontAwesomeIcon icon={faBars} />
                        <h4 className={cx('title-icon__name')}>Thể loại</h4>
                    </Link>

                    <Link to={config.home} className={cx('title-icon', 'bxh')}>
                        <h4 className={cx('title-icon__name')}>Bảng xếp hạng</h4>
                    </Link>
                </div>

                <Search />

                <div className={cx('title-icon')}>
                    <Link to={config.home} className={cx('title-icon')}>
                        <h4 className={cx('title-icon__name')}>Diễn đàn</h4>
                    </Link>

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Link to={config.home} className={cx('title-icon', 'bxh')}>
                                    <FontAwesomeIcon icon={faQuran} />
                                    <h4 className={cx('title-icon__name')}>Kệ sách</h4>
                                </Link>
                                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <div className={cx('bxh')}>
                                    <Button primary>Log in</Button>
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
