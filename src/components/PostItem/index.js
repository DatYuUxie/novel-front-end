import { faComment, faFire, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './PostItem.module.scss';

const cx = classNames.bind(styles);

function PostItem({ data }) {
    return (
        <div className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img
                    src={
                        data.User.avatar ||
                        'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg'
                    }
                    alt="cover-img"
                    className={cx('img')}
                />
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <Link to={`/thread/${data.postID}`} className={cx('title-icon')}>
                        <h3 className={cx('name')}>{data.title}</h3>
                    </Link>
                    <Button primary2 className={cx('tag')}>
                    {data.tag}
                    </Button>
                </div>
                <p className={cx('des')}>{data.content}</p>
                <div className={cx('info-container')}>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faFire} />}>
                        1.20k
                    </Button>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faComment} />}>
                        1.20k
                    </Button>
                    <Button className={cx('info')} leftIcon={<FontAwesomeIcon icon={faUserEdit} />}>
                        {data.User.username}
                    </Button>
                    <Button className={cx('info')}>
                        {new Date(data.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
