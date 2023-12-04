import classNames from 'classnames/bind';
import styles from './List.module.scss';

const cx = classNames.bind(styles);

function ListItem(data) {
    const item2 = cx('item2');
    const chan = data.data.chapterNumber % 2 == 0;
    return (
        <div className={cx('item', chan && item2)}>
            <p>{data.data.chapterNumber}</p>
            <div className={cx('item-content')}>
                <p>{data.data.name}</p>
                <p className={cx('time')}>{data.data.time}</p>
            </div>
        </div>
    );
}

export default ListItem;
