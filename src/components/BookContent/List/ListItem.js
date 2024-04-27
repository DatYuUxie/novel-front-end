import { Link } from 'react-router-dom';
import config from '../../../config';

import classNames from 'classnames/bind';
import styles from './List.module.scss';
import '../../../assets/css/grid.css';

const cx = classNames.bind(styles);

function ListItem({ chapter }) {
    const item2 = cx('item2');
    let responsive = 'm-6 c-12';
    const evenNumber = chapter.orderNumber % 4 == 0 || chapter.orderNumber % 4 == 3;
    return (
        <div className={cx('padding-item', responsive)}>
            <div className={cx('item', evenNumber && item2)}>
                <p>{chapter.orderNumber}</p>
                <Link to={`/chapter/${chapter.chapterID}`} className={cx('item-content')}>
                    <p className={cx('name')}>{chapter.chapterName}</p>
                    <p className={cx('time')}>{chapter.view} view</p>
                </Link>
            </div>
        </div>
    );
}

export default ListItem;
