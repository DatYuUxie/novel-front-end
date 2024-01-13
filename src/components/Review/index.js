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
                        <Rating onClick={handleRating} initialValue={rating} size="15" readonly />
                        <p className={cx('review-time')}>3 ngày trước</p>
                    </div>
                </div>
                <p>
                    Một kiệt tác cho cuốn tiểu thuyết đầu tiên mà tác giả này tạo ra, đã rất nhiều năm rồi tôi mới đọc
                    được thứ gì đó có lối viết và mô tả đỉnh cao, kết hợp với lịch sử và nhân vật chính tuyệt vời. Và
                    Tác giả nói chuyện và nhận xét với mọi người như thể anh ấy thực sự vui mừng vì tác phẩm và phản hồi
                    của mình. Bất cứ ai nỗ lực đều xứng đáng được tôn trọng.
                </p>

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
