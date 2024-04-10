import Review from '../Review';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Button from '../Button';
import { Rating } from 'react-simple-star-rating';

import classNames from 'classnames/bind';
import styles from './BookContent.module.scss';

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
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [rating, setRating] = useState(0);

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
                    <h2 className={cx('modal-title')} ref={(_subtitle) => (subtitle = _subtitle)}>Viết đánh giá của bạn</h2>
                    <div>
                        <form>
                            <div className={cx('rating')}>
                                <Rating onClick={handleRating} initialValue={rating} />
                                <h3 className={cx('rates')}>{rating}</h3>
                                <h3>/5</h3>
                            </div>

                            <div>
                                <textarea
                                    id="review"
                                    name="review"
                                    autoFocus
                                    placeholder="Viết đánh giá của bạn ở đây. Hãy viết đánh giá chi tiết nhất có thể, đánh giá của bạn sẽ rất quan trọng đến tác phẩm."
                                />
                            </div>
                        </form>
                    </div>

                    <div className={cx('button-group')}>
                        <Button primary onClick={closeModal}>
                            Đóng
                        </Button>
                        <Button primary2 onClick={closeModal}>
                            Đăng đánh giá
                        </Button>
                    </div>
                </div>
            </Modal>

            <Review />
            <Review />
            <Review />
        </div>
    );
}

export default Reviews;
