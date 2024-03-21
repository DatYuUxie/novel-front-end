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
                        <h3 className={cx('name')}>Translator Recruitment</h3>
                    </Link>
                    <Button primary2 className={cx('tag')}>
                        Bàn luận truyện
                    </Button>
                </div>
                <p className={cx('des')}>
                    I know that there’s been a lot of new writers joining our Webnovel community lately, but the flood
                    of SHAMEFUL self-promoting is unbearable lately. The moderators have better things to do with their
                    time than tell people to read the rules. Why would you NOT as soon as you join something new? It’s
                    idiotic to me, but apparently this needed to be said. READ THE RULES! It’s common sense, and if you
                    ignore them, or play stupid(seen others get chewed out, but still SHAMEFULLY post): you will get
                    chewed out by the veteran authors, then blocked by moderators. Continued abuse will bring you
                    negative reviews by the fore-mentioned vets.
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
