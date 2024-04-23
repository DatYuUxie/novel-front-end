import CoinComponent from '../../components/CoinComponent';
import SettingSideBar from '../../components/SettingSideBar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Coin() {
    return (
        <div className={cx('container')}>
                <SettingSideBar tag={1}/>
                <div className={cx('content')}>
                    <CoinComponent />
                   
                </div>
            </div>
    );
}

export default Coin;
