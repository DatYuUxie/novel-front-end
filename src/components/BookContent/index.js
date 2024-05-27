import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './BookContent.module.scss';
import Intro from './Intro';
import List from './List';
import Reviews from './Reviews';

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
            </div>
            <div className={cx('content')}>
                {tab === 0 && <Intro />}
                {tab === 1 && <Reviews />}
                {tab === 2 && <List bookID={bookID} />}
            </div>
        </div>
    );
}

export default BookContent;
