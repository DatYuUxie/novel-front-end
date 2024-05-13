import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import Button from '../Button';
import Comment from '../Comment';
import classNames from 'classnames/bind';
import styles from './BookContent.module.scss';
import { getCommentsbyChapterID, createComment } from '../../api/api';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { message } from 'antd';

const cx = classNames.bind(styles);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '500px',
        height: '350px',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function Comments() {
    const { user } = useContext(UserContext);
    const { chapterID } = useParams();
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [content, setContent] = useState('');

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#00000';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const handleCreateComment = async () => {
        try {
            const data = {
                content: content,
                chapterID: chapterID,
                userID: user.account.userID,
            };
            console.log(data);
            let res = await createComment(data);
            if (res.data.EC === 0) {
                message.success('content success');
            }

            closeModal();
        } catch (error) {
            console.log('Failed to create review: ', error);
            message.error('Đánh giá của bạn không thể gửi');
        }
    };
    const [comments, setComments] = useState([]);
    const handleGetReviewsbyBookID = async () => {
        try {
            let res = await getCommentsbyChapterID(chapterID);
            console.log(res);
            setComments(res.data.DT);
        } catch (error) {
            console.log('Failed to get comments: ', error);
        }
    };
    React.useEffect(() => {
        handleGetReviewsbyBookID();
    }, []);

    return (
        <div>
            <Button primary2 onClick={openModal}>
                Viết bình luận
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
                        Viết bình luận của bạn
                    </h2>
                    <div>
                        <form>
                            <div>
                                <textarea
                                    id="review"
                                    name="review"
                                    autoFocus
                                    placeholder="Viết bình luận của bạn ở đây. Hãy viết bình luận chi tiết nhất có thể, đánh giá của bạn sẽ rất quan trọng đến tác phẩm."
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
                        <Button primary2 onClick={(e) => handleCreateComment(e)} type="submit">
                            Đăng đánh giá
                        </Button>
                    </div>
                </div>
            </Modal>

            {comments.map((item, index) => (
                <Comment data={item} />
            ))}
        </div>
    );
}

export default Comments;
