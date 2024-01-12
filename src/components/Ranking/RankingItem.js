import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';

const cx = classNames.bind(styles);

function RankingItem() {
    return (
        <div className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                    alt="cover-img"
                    className={cx('img')}
                />
            </div>
            <h3 className={cx('rank')}>01</h3>
            <div className={cx('content')}>
                <h4 className={cx('name')}>Goddess of Ice: Corrupting Bleach</h4>

                <h5 className={cx('type')}>fantasty</h5>
            </div>
        </div>
    );
}

export default RankingItem;
