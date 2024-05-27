import { faFire, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RankingItem2({data, order}) {

    return (
        <Link to={`/book/${data.bookID}`} className={cx('container-item')}>
            <h3 className={cx('rank')}>{order}</h3>

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
        </Link>
    );
}

export default RankingItem2;
