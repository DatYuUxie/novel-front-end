import { Link } from 'react-router-dom';
import config from '../../config';

import classNames from 'classnames/bind';
import styles from './NovelItem.module.scss';
import Button from '../Button';
import '../../assets/css/grid.css';
const cx = classNames.bind(styles);

function NovelItem() {
    let responsive = 'l-3 m-4 c-6';
    return (
        <div className={cx('container', responsive)}>
            <Link to={config.book} className={cx('novel-item-container')}>
                <div className={cx('cover-novel-item')}>
                    <div className={cx('cover-novel-img')}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                            alt="cover-img"
                            className={cx('cover-img')}
                        />
                    </div>
                    <div className={cx('novel-info')}>
                        <h3 className={cx('name')}>Cầu ma</h3>
                        <p className={cx('novel-des')}>
                            Có loại người, trong miệng chưa từng nói ra tình cảm, nhưng chôn giấu tình cảm tại đáy lòng,
                            là ngươi nếu như hiểu, liền có thể mỉm cười cả đời chấp nhất.
                        </p>
                        <h5 className={cx('type')}>#Huyền huyễn</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NovelItem;
