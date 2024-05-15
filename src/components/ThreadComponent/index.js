import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommenting, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import Comments from '../BookContent/Comments';
import { Reply } from '../../assets/icon';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ThreadComponent.module.scss';

const cx = classNames.bind(styles);

function ThreadComponent({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('writer')}>
                <Link
                    className={cx('icon')}
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    <Reply />
                </Link>
                <div className={cx('cover-img')}>
                    <img
                        src={
                            data?.User?.avatar ||
                            'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg'
                        }
                        alt="cover-img"
                        className={cx('img')}
                    />
                </div>
                <h3>{data?.User?.username}</h3>
                <p className={cx('time')}>
                    {new Date(data.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                </p>
            </div>
            <h1 className={cx('title')}>{data.title}</h1>
            <p className={cx('content')}>{data.content}</p>
            <div className={cx('action')}>
                <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                <FontAwesomeIcon icon={faCommenting} className={cx('icon')} />
            </div>
            <Comments />
        </div>
    );
}

export default ThreadComponent;
