import { faCommenting, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, message, Space } from 'antd';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Reply } from '../../assets/icon';
import { UserContext } from '../../context/UserContext';
import Comments from '../BookContent/Comments';
import Button from '../Button';
import styles from './ThreadComponent.module.scss';
import { updateForum, deleteForum } from '../../api/api';
import { useNavigate } from 'react-router-dom';

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
function ThreadComponent({ data, onDataUpdate }) {
    const navigate = useNavigate();
    let { user } = useContext(UserContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [forum, setForum] = useState(data);
    // console.log('thread', user);
    useEffect(() => {
        setForum(data);
    }, [data]);
    const handleEditThread = async () => {
        openModal();
        console.log('handleEditThread');
    };
    const handleDeleteThread = async () => {
        try {
            let response = await deleteForum({ postID: data.postID, userID: data.userID });
            console.log(response);
            if (response && response.data && response.data.EC === 0) {
                message.success(response.data.EM);
                navigate('/forum');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const items = [
        user &&
            user.account &&
            user.account.userID === data.userID && {
                key: '1',
                label: (
                    <p className={cx('edit-item')} onClick={handleEditThread}>
                        Chỉnh sửa
                    </p>
                ),
            },
        {
            key: '2',
            label: <p className={cx('edit-item')}>Báo cáo bài viết</p>,
        },
        user &&
            user.account &&
            (user.account.userID === data.userID || user.account.role === 'ADMIN') && {
                key: '3',
                label: (
                    <p className={cx('edit-item')} onClick={handleDeleteThread}>
                        Xóa
                    </p>
                ),
                danger: true,
            },
    ];

    const handleChange = (e) => {
        setForum({
            ...forum,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await updateForum(forum);
            if (response && response.data && response.data.EC === 0) {
                message.success(response.data.EM);
                onDataUpdate();
            }
        } catch (error) {
            console.error(error);
        }
        setIsOpen(false);
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#00000';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('writer')}>
                <div className={cx('first-child')}>
                    <Link
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

                <Space direction="vertical">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                        arrow
                    >
                        <FontAwesomeIcon className={cx('icon')} icon={faBars} />
                    </Dropdown>
                </Space>
            </div>
            <h1 className={cx('title')}>{data.title}</h1>
            <p className={cx('content')}>
                {data.content &&
                    data.content.split('\n').map((paragraph, index) => (
                        <p className={cx('paragraph1')} key={index}>
                            {paragraph}
                        </p>
                    ))}
            </p>
            <div className={cx('action')}>
                <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                <FontAwesomeIcon icon={faCommenting} className={cx('icon')} />
            </div>
            <Comments />
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={cx('modal')}>
                    <h2 className={cx('modal-title')}>Chỉnh sửa bài viết</h2>
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

export default ThreadComponent;
