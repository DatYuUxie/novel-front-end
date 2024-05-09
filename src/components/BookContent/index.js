import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '../Button';
import Intro from './Intro';
import Reviews from './Reviews';
import Comments from './Comments';
import List from './List';
import styles from './BookContent.module.scss';

const cx = classNames.bind(styles);

function BookContent({ bookID }) {
    const [tab, setTab] = useState(0);
    const active = cx('active');
    return (
        <div className={cx('container')}>
            <div className={cx('tabs')}>
                <div className={cx('tab-item', tab === 0 && active)} onClick={() => setTab(0)}>
                    Giới thiệu
                </div>
                <div className={cx('tab-item', tab === 1 && active)} onClick={() => setTab(1)}>
                    Đánh giá
                </div>
                <div className={cx('tab-item', tab === 2 && active)} onClick={() => setTab(2)}>
                    Danh sách chương
                </div>
                <div className={cx('tab-item', tab === 3 && active)} onClick={() => setTab(3)}>
                    Bình luận
                </div>
            </div>
            <div className={cx('content')}>
                {tab === 0 && <Intro />}
                {tab === 1 && <Reviews />}
                {tab === 2 && <List bookID={bookID} />}
                {tab === 3 && <Comments />}
            </div>
        </div>
    );
}

export default BookContent;
