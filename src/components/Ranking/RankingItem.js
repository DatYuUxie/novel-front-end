import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';

const cx = classNames.bind(styles);

function RankingItem({ data }) {
    // console.log("bxhit",data)
    return (
        <div className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img src={data.img} alt="cover-img" className={cx('img')} />
            </div>
            <h3 className={cx('rank')}>{data.rank}</h3>
            <div className={cx('content')}>
                <h4 className={cx('name')}>{data.name}</h4>

                <h5 className={cx('type')}>#{data.tag}</h5>
            </div>
        </div>
    );
}

export default RankingItem;
