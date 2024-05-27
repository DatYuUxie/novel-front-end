import classNames from 'classnames/bind';
import styles from './NewUpdate.module.scss';

const cx = classNames.bind(styles);

function UpdateItem({ data }) {
    return (
        <div className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img src={data.poster} alt="cover-img" className={cx('img')} />
            </div>
            <div className={cx('content')}>
                <h4 className={cx('name')}>{data.bookName}</h4>
                <p className={cx('novel-des')}>{data.description}</p>
                <h5 className={cx('type')}>#{data.tag}</h5>
            </div>
        </div>
    );
}

export default UpdateItem;
