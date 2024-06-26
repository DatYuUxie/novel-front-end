import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import '../../../assets/css/grid.css';
import styles from './List.module.scss';

const cx = classNames.bind(styles);

function ListItem({ chapter }) {
    const item2 = cx('item2');
    let responsive = 'm-6 c-12';
    const evenNumber = chapter.orderNumber % 4 === 0 || chapter.orderNumber % 4 === 3;
    return (
        <div className={cx('padding-item', responsive)}>
            <div className={cx('item', evenNumber && item2)}>
                <p>{chapter.orderNumber}</p>
                <Link to={`/chapter/${chapter.bookID}/${chapter.orderNumber}`} className={cx('item-content')}>
                    <p className={cx('name')}>{chapter.chapterName}</p>
                    <p className={cx('time')}>
                        {new Date(chapter.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default ListItem;
