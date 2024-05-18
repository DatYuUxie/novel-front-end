import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import styles from './BookBanner.module.scss';
import coin1 from '../../assets/img/coin1.png';

const cx = classNames.bind(styles);
function GiftCard({ index, data, handleClick, isActive }) {
    let activeCss = cx('item-active');

    return (
        <div className="l-3">
            <div
                className={cx('coin-item-container', isActive && activeCss)}
                onClick={() => handleClick(data.price, index)}
            >
                <div className={cx('cover-coin-item')}>
                    <div className={cx('cover-coin-img')}>
                        <img src={data.img} alt="cover-img" className={cx('cover-img')} />
                    </div>
                </div>
                <div className={cx('money')}>
                    {data.price}
                    <img crossOrigin="anonymous" className="dib" width="40" height="40" alt="coins" src={coin1} />
                </div>
            </div>
        </div>
    );
}

export default GiftCard;
