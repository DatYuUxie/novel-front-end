import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RankingItem({ data, order }) {
    return (
        <Link to={`/book/${data.bookID}`} className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img src={data.poster} alt="cover-img" className={cx('img')} />
            </div>
            <h3 className={cx('rank')}>{order}</h3>
            <div className={cx('content')}>
                <h4 className={cx('name')}>{data.bookName}</h4>
                <h5 className={cx('type')}>#{data.tag}</h5>
            </div>
        </Link>
    );
}

export default RankingItem;
