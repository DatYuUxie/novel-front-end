import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { Rating } from 'react-simple-star-rating';
import Button from '../Button';
import Review from '../Review';
import classNames from 'classnames/bind';
import styles from './BookContent.module.scss';
import { UserContext } from '../../context/UserContext';
import { getReviewsbyBookID, createReview } from '../../api/api';
import { useParams } from 'react-router-dom';
import { message } from 'antd';

const cx = classNames.bind(styles);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '500px',
        height: '400px',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function Reviews() {
    const { bookID } = useParams();
    let subtitle;
    const { user } = useContext(UserContext);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');
    const [reviews, setReviews] = useState([]);
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#00000';
    }

    function closeModal() {
        setIsOpen(false);
        setRating(0);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = {
            ratting: rating,
            content: content,
            userID: user.account.userID,
            bookID: bookID,
        };
        try {
            const response = await createReview(formData);
            if (response.data.EC === 0) {
                message.success('Đánh giá của bạn đã được gửi');
            }
        } catch (error) {
            console.log('Failed to create review: ', error);
            message.error('Đánh giá của bạn không thể gửi');
        }
        closeModal();
    };
    const handleGetReviewsbyBookID = async () => {
        try {
            const response = await getReviewsbyBookID(bookID);
            setReviews(response.data.DT);
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        handleGetReviewsbyBookID();
    }, []);

    return (
        <div>
            <Button primary2 onClick={openModal}>
                Viết đánh giá
            </Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={cx('modal')}>
                    <h2 className={cx('modal-title')} ref={(_subtitle) => (subtitle = _subtitle)}>
                        Viết đánh giá của bạn
                    </h2>
                    <div>
                        <form action="" method="post">
                            <div className={cx('rating')}>
                                <Rating onClick={handleRating} initialValue={rating} />

                                <h3 className={cx('rates')}>{rating}</h3>
                                <h3>/5</h3>
                            </div>

                            <div>
                                <textarea
                                    id="content"
                                    name="content"
                                    autoFocus
                                    placeholder="Viết đánh giá của bạn ở đây. Hãy viết đánh giá chi tiết nhất có thể, đánh giá của bạn sẽ rất quan trọng đến tác phẩm."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>

                    <div className={cx('button-group')}>
                        <Button primary onClick={closeModal}>
                            Đóng
                        </Button>
                        <Button primary2 onClick={(e) => handleSubmit(e)} type="submit">
                            Đăng đánh giá
                        </Button>
                    </div>
                </div>
            </Modal>

            {reviews.map((item, index) => (
                <Review data={item} />
            ))}
        </div>
    );
}

export default Reviews;
