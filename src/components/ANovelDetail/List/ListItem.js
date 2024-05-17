import { Link } from 'react-router-dom';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './List.module.scss';
import '../../../assets/css/grid.css';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ListItem({ chapter }) {
    const [status, setStatus] = useState(false);
    const item2 = cx('item2');
    let responsive = 'm-6 c-12';
    const evenNumber = chapter.orderNumber % 4 == 0 || chapter.orderNumber % 4 == 3;

    const handleChangeStatus = () => {
        setStatus(!status);
    };
    return (
        <div className={cx('padding-item', responsive)}>
            <div className={cx('item', evenNumber && item2)}>
                <p>{chapter.orderNumber}</p>

                <div className={cx('item-content')}>
                    <div className={cx('gr-row')}>
                        <Link to={`/chapter/${chapter.bookID}/${chapter.orderNumber}`}>
                            <p className={cx('name')}>{chapter.chapterName}</p>
                        </Link>
                        <FontAwesomeIcon
                            className={cx('icon')}
                            onClick={handleChangeStatus}
                            icon={status ? faLock : faUnlock}
                        />
                    </div>
                    <p className={cx('time')}>
                        {new Date(chapter.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
