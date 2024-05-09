import { faCommenting, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import classNames from 'classnames/bind';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from './Review.module.scss';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Review({ data }) {
    console.log('data: ', data);
    const { bookID } = useParams();
    const [ratting, setRatting] = useState(5);

    // Catch Rating value
    const handleRating = (rate) => {
        setRatting(rate);
    };

    return (
        <div className={cx('review')}>
            <div className={cx('avatar')}>
                <img
                    className={cx('user-img')}
                    src={
                        data.User.avatar ||
                        'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg'
                    }
                    alt="user"
                />
            </div>
            <div className={cx('review-content')}>
                <div className={cx('review-info')}>
                    <h3>{data.User.username}</h3>

                    <div className={cx('name-vote')}>
                        <Rating onClick={handleRating} initialValue={data.ratting} size="15" readonly />
                        <p className={cx('review-time')}>
                            {new Date(data.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                        </p>
                    </div>
                </div>
                <p>{data.content}</p>

                <div className={cx('review-footer')}>
                    <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                    <FontAwesomeIcon icon={faCommenting} className={cx('icon')} />
                    <FontAwesomeIcon icon={faExclamationTriangle} className={cx('icon')} />
                </div>
            </div>
        </div>
    );
}

export default Review;
