import { faFire, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Ranking2.module.scss';

const cx = classNames.bind(styles);

function RankingItem2({ data }) {
    return (
        <div className={cx('container-item')}>
            <h3 className={cx('rank')}>{data.rank}</h3>

            <div className={cx('cover-img')}>
                <img src={data.poster} alt="poster" className={cx('img')} />
            </div>
            <div className={cx('content')}>
                <h3 className={cx('name')}>{data.bookName}</h3>
                <p className={cx('des')}>{data.description}</p>
                <div className={cx('info-container')}>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faUserEdit} />}>
                        Nhĩ Căn
                    </Button>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faFire} />}>
                        1.20k
                    </Button>
                    <Button className={cx('info')}>#{data.tag}</Button>
                </div>
            </div>
        </div>
    );
}

export default RankingItem2;
