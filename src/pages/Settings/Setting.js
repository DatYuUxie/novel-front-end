import PostItem from '../../components/PostItem';
import SettingSideBar from '../../components/SettingSideBar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SettingComponent from '../../components/SettingComponent';
import classNames from 'classnames/bind';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Setting() {
    return (
        <div className={cx('container')}>
            <SettingSideBar tag = {3}/>
            <div className={cx('content')}>
                <SettingComponent />
            </div>
        </div>
    );
}

export default Setting;
