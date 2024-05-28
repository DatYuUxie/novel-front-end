import { faAward, faHeart, faPoll, faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import Button from '../Button';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import styles from './ForumSidebar.module.scss';
import { createForum } from '../../api/api';
import { UserContext } from '../../context/UserContext';
import { message } from 'antd';

const cx = classNames.bind(styles);
const customStyles = {
    content: {
        top: '57%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '900px',
        height: '515px',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

function ForumSidebar() {
    const { user } = useContext(UserContext);
    const [active, setActive] = useState('Tất cả');
    let activeCss = cx('active');
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [forum, setForum] = useState({
        title: '',
        tag: '',
        content: '',
    });
    const handleChange = (e) => {
        setForum({
            ...forum,
            [e.target.name]: e.target.value,
        });
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = { ...forum, userID: user.account.userID };

            const response = await createForum(data);
            if (response.data.EC === 0) {
                message.success('Tạo bài viết thành công');
                closeModal();
                window.location.reload();

            }
        } catch (error) {
            console.error(error);
            message.error('Tạo bài viết thất bại');
        }
        // setIsOpen(false);
        // setRating(0);
    };
    const handleclick = (e) => {
        console.log(e.target.innerText);
        setActive(e.target.innerText);
    };
    return (
        <div className={cx('sidebar')}>
            <Button primary2 onClick={openModal}>
                Tạo bài viết
            </Button>
            <h3 className={cx('title')}>Tags:</h3>
            <Button
                className={cx('item', active === 'Tất cả' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Tất cả
            </Button>
            <Button
                className={cx('item', active === 'Hỏi & đáp' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Hỏi & đáp
            </Button>
            <Button
                className={cx('item', active === 'Bàn luận truyện' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faReadme} />}
            >
                Bàn luận truyện
            </Button>
            <Button
                className={cx('item', active === 'Báo cáo lỗi' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faAward} />}
            >
                Báo cáo lỗi
            </Button>
            <Button
                className={cx('item', active === 'Góp ý' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faSpa} />}
            >
                Góp ý
            </Button>
            <Button
                className={cx('item', active === 'Đề cử' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faHeart} />}
            >
                Đề cử
            </Button>
            <Button
                className={cx('item', active === 'Sự kiện' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faSpa} />}
            >
                Sự kiện
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
                        Tạo bài viết mới
                    </h2>
                    <form>
                        <fieldset className={cx('fieldset')}>
                            <label htmlFor="name">
                                <h4>Tiêu đề:</h4>
                            </label>
                            <input
                                className={cx('input')}
                                type="text"
                                id="title"
                                name="title"
                                value={forum.title}
                                onChange={handleChange}
                            />
                            <label htmlFor="gender">
                                <h4>Danh mục:</h4>
                            </label>
                            <select
                                className={cx('input')}
                                id="tag"
                                name="tag"
                                value={forum.tag}
                                onChange={handleChange}
                            >
                                <option value="">Chọn danh mục tag</option>

                                <option value="Hỏi & đáp">Hỏi & đáp</option>
                                <option value="Bàn luận truyện">Bàn luận truyện</option>
                                <option value="Báo cáo lỗi">Báo cáo lỗi</option>
                                <option value="Góp ý">Góp ý</option>
                                <option value="Đề cử">Đề cử</option>
                                <option value="Sự kiện">Sự kiện</option>
                            </select>
                            <label htmlFor="gender">
                                <h4>Nội dung:</h4>
                            </label>
                            <div>
                                <textarea
                                    className={cx('textarea')}
                                    id="content"
                                    name="content"
                                    placeholder="Nhập nội dung bài viết ở đây"
                                    value={forum.content}
                                    onChange={handleChange}
                                />
                            </div>
                        </fieldset>
                    </form>

                    <div className={cx('button-group')}>
                        <Button primary onClick={closeModal}>
                            Đóng
                        </Button>
                        <Button primary2 onClick={handleSubmit}>
                            Đăng bài viết
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ForumSidebar;
