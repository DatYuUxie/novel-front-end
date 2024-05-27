import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './BookContent.module.scss';
import Draft from './Draft';
import List from './List';

const cx = classNames.bind(styles);

function BookContent({ bookID }) {
    const [tab, setTab] = useState(0);
    const active = cx('active');
    return (
        <div className={cx('container')}>
            <div className={cx('tabs')}>
                <div className={cx('tab-item', tab === 0 && active)} onClick={() => setTab(0)}>
                    Bản thảo
                </div>
                <div className={cx('tab-item', tab === 1 && active)} onClick={() => setTab(1)}>
                    Danh sách chương
                </div>
            </div>
            <div className={cx('content')}>
                {tab === 0 && <Draft bookID={bookID} />}
                {tab === 1 && <List bookID={bookID} />}
            </div>
        </div>
    );
}

export default BookContent;
