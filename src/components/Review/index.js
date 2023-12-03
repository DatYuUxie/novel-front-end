

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommenting,  } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';

import styles from './Review.module.scss';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Review() {
    return (
        <div className={cx('review')}>
            <div className={cx('review-info')}>
                <div className={cx('user')}>
                    <img
                        className={cx('user-img')}
                        src="https://kiddy.edu.vn/wp-content/uploads/2023/05/130-Anh-Meme-Meme-Cat-Cute-Cute-Up-Sink-Down.jpg"
                        alt="user"
                    />
                </div>
                <div className={cx('name-vote')}>
                    <p className={cx('name')}>Nobita</p>
                    <p className={cx('review-time')}>3 ngày trước</p>
                </div>
            </div>
            <div className={cx('review-content')}>
                <p>
                    This is the service I have been looking for for years but not knowing this type of thing was the
                    answer or even existed. Forget multiple complicated slow note-taking websites and applications. When
                    google and websites are used for every type of work I conduct on my pc this takes away the headache
                    of bookmarks and tedious switching between projects.
                </p>
            </div>

            <div className={cx('review-footer')}>
                <div className={cx('reply-report')}>
                    <div className={cx('reply')}>
                    <FontAwesomeIcon icon={faCommenting} />
                    </div>
                    <div className={cx('report')}>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
