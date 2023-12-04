import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommenting, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { Rating } from 'react-simple-star-rating';
import React, { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './Review.module.scss';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Review() {
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
                    src="https://kiddy.edu.vn/wp-content/uploads/2023/05/130-Anh-Meme-Meme-Cat-Cute-Cute-Up-Sink-Down.jpg"
                    alt="user"
                />
            </div>
            <div className={cx('review-content')}>
                <div className={cx('review-info')}>
                    <h3>Nobita</h3>

                    <div className={cx('name-vote')}>
                        <Rating onClick={handleRating} initialValue={rating} size="15" readonly/>
                        <p className={cx('review-time')}>3 ngày trước</p>
                    </div>
                </div>
                <p>
                    This is the service I have been looking for for years but not knowing this type of thing was the
                    answer or even existed. Forget multiple complicated slow note-taking websites and applications. When
                    google and websites are used for every type of work I conduct on my pc this takes away the headache
                    of bookmarks and tedious switching between projects.
                </p>

                <div className={cx('review-footer')}>

                    <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')}/>
                    <FontAwesomeIcon icon={faCommenting} className={cx('icon')}/>
                    <FontAwesomeIcon icon={faExclamationTriangle} className={cx('icon')}/>
                </div>
            </div>
        </div>
    );
}

export default Review;
