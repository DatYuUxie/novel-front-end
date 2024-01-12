import classNames from 'classnames/bind';
import styles from './Ranking2.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faEdit, faFire, faHeart, faPoll, faSpa, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function RankingItem2() {
    return (
        <div className={cx('container-item')}>
            <h3 className={cx('rank')}>01</h3>

            <div className={cx('cover-img')}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                    alt="cover-img"
                    className={cx('img')}
                />
            </div>
            <div className={cx('content')}>
                <h3 className={cx('name')}>Goddess of Ice: Corrupting Bleach</h3>
                <p className={cx('des')}>
                    Thiên địa là vạn vật chúng sinh khách xá, quang âm là từ xưa tới nay khách qua đường.Tử sinh khác
                    biệt, thật giống như mộng cùng tỉnh khác biệt, xôn xao biến hóa, không thể cật vấn.Như vậy siêu việt
                    sinh tử, đã vượt ra thiên địa, tại quang âm
                </p>
                <div className={cx('info-container')}>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faUserEdit} />}>Nhĩ Căn</Button>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faFire} />}>1.20k</Button>
                    <Button className={cx('info')}>#Tiên hiệp</Button>
                </div>
            </div>
        </div>
    );
}

export default RankingItem2;
