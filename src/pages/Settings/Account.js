import PostItem from '../../components/PostItem';
import SettingSideBar from '../../components/SettingSideBar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountComponent from '../../components/AccountComponent';

import classNames from 'classnames/bind';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('container')}>
                <SettingSideBar tag={2}/>
                <div className={cx('content')}>
                    <AccountComponent/>
                </div>
            </div>
    );
}

export default Account;
