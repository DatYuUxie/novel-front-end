import classNames from 'classnames/bind';
import styles from './NewUpdate.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UpdateItem({ data }) {
    return (
        <Link to={`/book/${data.bookID}`} className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img src={data.poster} alt="cover-img" className={cx('img')} />
            </div>
            <div className={cx('content')}>
                <h4 className={cx('name')}>{data.bookName}</h4>
                <p className={cx('novel-des')}>{data.description}</p>
                <h5 className={cx('type')}>#{data.tag}</h5>
            </div>
        </Link>
    );
}

export default UpdateItem;
