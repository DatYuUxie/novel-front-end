import classNames from 'classnames/bind';
import styles from './List.module.scss';
import '../../../assets/css/grid.css'

const cx = classNames.bind(styles);

function ListItem(data) {
    const item2 = cx('item2');
    let responsive = 'm-6 c-12';
    const evenNumber = data.data.chapterNumber % 4 == 0 || data.data.chapterNumber % 4 == 3 ;
    return (
        <div className={cx('padding-item' , responsive)}>
        <div className={cx('item', evenNumber && item2 )}>
            <p>{data.data.chapterNumber}</p>
            <div className={cx('item-content')}>
                <p>{data.data.name}</p>
                <p className={cx('time')}>{data.data.time}</p>
            </div>
        </div>
        </div>
    );
}

export default ListItem;
