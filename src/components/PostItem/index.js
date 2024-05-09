import { Link } from 'react-router-dom';
import config from '../../config';

import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAward,
    faComment,
    faEdit,
    faFire,
    faHeart,
    faPoll,
    faSpa,
    faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function PostItem() {
    return (
        <div className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img
                    src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg"
                    alt="cover-img"
                    className={cx('img')}
                />
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <Link to={config.thread} className={cx('title-icon')}>
                        <h3 className={cx('name')}>Bàn luận xích tâm thuẫn thiên</h3>
                    </Link>
                    <Button primary2 className={cx('tag')}>
                        Bàn luận truyện
                    </Button>
                </div>
                <p className={cx('des')}>
                Đây là một dãy núi lớn liên miên không dứt, như một con rồng còn sống kéo dài cả vùng đất mênh mông này,
                ở đấy có cỏ cây rậm rạp, còn có tiếng chim thú không ngừng vang lên. Xa xa nhìn lại, có thể thấy trên
                núi có một phần giống như được năm ngọn núi hợp lại, trông như năm ngón tay người giơ lên trời cao.
                </p>
                <div className={cx('info-container')}>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faFire} />}>
                        1.20k
                    </Button>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faComment} />}>
                        1.20k
                    </Button>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faUserEdit} />}>
                        Nhĩ Căn
                    </Button>
                    <Button className={cx('info')}>3-8-2024</Button>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
