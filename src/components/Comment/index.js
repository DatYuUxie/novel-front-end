import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommenting, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { Rating } from 'react-simple-star-rating';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Comment({ data }) {
    const [rating, setRating] = useState(5);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
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
                    <p className={cx('review-time')}>
                        {new Date(data.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                    </p>
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

export default Comment;
