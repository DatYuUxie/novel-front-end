import { faCommenting } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowLeft,
    faArrowRight,
    faBook,
    faCircleMinus,
    faCirclePlus,
    faClock,
    faExclamationTriangle,
    faUserEdit,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getChapterbyBookId, getChapterbyId } from '../../api/api';
import { Dialog, Playlist, Reply, Revote, Widget } from '../../assets/icon';
import Comments from '../../components/BookContent/Comments';
import List from '../../components/BookContent/List';
import Button from '../../components/Button';
import { ColorFonts } from '../../constants/ColorFont';
import styles from './Chapter.module.scss';

const cx = classNames.bind(styles);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '400px',
        height: '300px',
        transform: 'translate(-50%, -50%)',
    },
};

const customStyles2 = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '900px',
        height: '400px',
        transform: 'translate(-50%, -50%)',
    },
};

// Modal.setAppElement('#root');
function Chapter() {
    const navigate = useNavigate();
    const { bookID, orderNumber } = useParams();
    const [chapter, setChapter] = useState({});
    const [chapterList, setChapterList] = useState([]);
    const [orderNumberInit, setOrderNumberInit] = useState(orderNumber);
    const handleDecrease = () => {
        let newOrderNumber = parseInt(orderNumber) - 1;
        if (newOrderNumber < 1) return;
        setOrderNumberInit(newOrderNumber);
        navigate(`/chapter/${bookID}/${newOrderNumber}`);
    };
    const handleIncrease = () => {
        let newOrderNumber = parseInt(orderNumber) + 1;
        if (newOrderNumber > setChapterList.length + 1) return;
        setOrderNumberInit(newOrderNumber);
        navigate(`/chapter/${bookID}/${newOrderNumber}`);
    };

    const getChapter = async (bookID, orderNumberInit) => {
        try {
            const response = await getChapterbyId(bookID, orderNumberInit);
            setChapter(response.data.DT);
        } catch (error) {
            console.log('Failed to fetch chapter data:', error);
        }
    };
    const getChapterList = async (bookID) => {
        try {
            const response = await getChapterbyBookId(bookID);
            setChapterList(response.data.DT);
        } catch (error) {
            console.log('Failed to fetch chapter data:', error);
        }
    };
    useEffect(() => {
        getChapter(bookID, orderNumberInit);
    }, [orderNumberInit]);
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);
    const [mark, setMark] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000000');

    const active = cx('mark');

    useEffect(() => {
        const themeColorId = localStorage.getItem('chapterTheme');
        if (themeColorId) {
            const color = ColorFonts.find((item) => item.id === themeColorId);
            setBackgroundColor(color.bg);
            setTextColor(color.text);
        }
        getChapterList(bookID);
    }, []);

    const increaseFontSize = () => {
        setFontSize(fontSize + 1);
    };
    const decreaseFontSize = () => {
        setFontSize(fontSize - 1);
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
    }

    // loai 2
    function openModal2() {
        setIsOpen2(true);
    }

    function afterOpenModal2() {
        subtitle.style.color = '#00000';
    }

    function closeModal2() {
        setIsOpen2(false);
    }

    const handleTextColorChange = (event) => {
        const newColorId = event.target.value;
        const color = ColorFonts.find((item) => item.id === newColorId);
        setBackgroundColor(color.bg);
        setTextColor(color.text);
        localStorage.setItem('chapterTheme', newColorId); // Lưu giá trị vào local storage
    };
    return (
        <div className={cx('container')}>
            <div className={cx('content')} style={{ backgroundColor: backgroundColor, color: textColor }}>
                <div className={cx('head')}>
                    <Button rounded tag leftIcon={<FontAwesomeIcon icon={faArrowLeft} />} onClick={handleDecrease}>
                        Chương trước
                    </Button>
                    <Button rounded tag rightIcon={<FontAwesomeIcon icon={faArrowRight} />} onClick={handleIncrease}>
                        Chương sau
                    </Button>
                </div>
                <p className={cx('name')}>{`Chương ${chapter.orderNumber}: ${chapter.chapterName}`}</p>
                <div className={cx('info')}>
                    <Button
                        info
                        text
                        leftIcon={<FontAwesomeIcon icon={faBook} />}
                        style={{ backgroundColor: backgroundColor, color: textColor }}
                    >
                        {chapter && chapter.Book && chapter.Book.bookName}
                    </Button>
                    <Button
                        info
                        text
                        leftIcon={<FontAwesomeIcon icon={faUserEdit} />}
                        style={{ backgroundColor: backgroundColor, color: textColor }}
                    >
                        Nhĩ Căn
                    </Button>
                    <Button
                        info
                        text
                        leftIcon={<FontAwesomeIcon icon={faClock} />}
                        style={{ backgroundColor: backgroundColor, color: textColor }}
                    >
                        20:20 1-1-2023
                    </Button>
                </div>

                <div className={cx('paragraph')} style={{ fontSize: fontSize + 'px' }}>
                    <div className="cha-content" data-report-l1="3">
                        {chapter.content &&
                            chapter.content.split('\n').map((paragraph, index) => (
                                <p className={cx('paragraph1')} key={index}>
                                    {paragraph}
                                </p>
                            ))}
                    </div>
                </div>
                <div className={cx('foot')}>
                    <Button rounded tag leftIcon={<FontAwesomeIcon icon={faArrowLeft} />} onClick={handleDecrease}>
                        Chương trước
                    </Button>
                    <Button rounded tag rightIcon={<FontAwesomeIcon icon={faArrowRight} />} onClick={handleIncrease}>
                        Chương sau
                    </Button>
                </div>
                <div className={cx('foot2')}>
                    <Button className={cx('warning')} leftIcon={<FontAwesomeIcon icon={faExclamationTriangle} />}>
                        Báo lỗi chương
                    </Button>
                </div>
                <div className={cx('foot2')}>
                    <Button
                        className={cx('comment')}
                        leftIcon={<FontAwesomeIcon icon={faCommenting} />}
                        onClick={() => {
                            setCommentOpen(!commentOpen);
                        }}
                    >
                        Xem bình luận
                    </Button>
                </div>
                {commentOpen && (
                    <>
                        <hr className={cx('hr')} />

                        <Comments chapterID={chapter.chapterID} />
                    </>
                )}
            </div>
            <div className={cx('sidebar')}>
                <Link
                    className={cx('icon')}
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    <Reply />
                    <span>Quay về trang truyện</span>
                </Link>

                <Link className={cx('icon')} onClick={openModal}>
                    <Widget />
                    <span>Cài đặt hiển thị</span>
                </Link>
                <Link className={cx('icon')} onClick={openModal2}>
                    <Playlist />
                    <span>Danh sách chương</span>
                </Link>
                <Link
                    className={cx('icon', mark === true && active)}
                    onClick={() => {
                        setMark(!mark);
                    }}
                >
                    <Revote />
                    <span>Đánh dấu</span>
                </Link>
                <Link
                    className={cx('icon')}
                    onClick={() => {
                        setCommentOpen(!commentOpen);
                    }}
                >
                    <Dialog />
                    <span>Xem bình luận</span>
                </Link>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className={cx('modal')}>
                        <div className={cx('button-group')}>
                            <h2 className={cx('modal-title')} ref={(_subtitle) => (subtitle = _subtitle)}>
                                Cài đặt hiển thị
                            </h2>
                            <FontAwesomeIcon icon={faXmark} onClick={closeModal} className={cx('close-btn')} />
                        </div>
                        <div>
                            <div id="setting-content">
                                <h4 className={cx('no-user-select')}>Màu nền:</h4>
                                <div className={cx('radio')}>
                                    <label htmlFor="radio1">
                                        <input
                                            id="radio1"
                                            type="radio"
                                            name="radio"
                                            value="1"
                                            onChange={handleTextColorChange}
                                        />
                                        <span className={cx('outer', { active: backgroundColor === '#f5e4e4' })}>
                                            <span className={cx('inner', 't1')}></span>
                                        </span>
                                    </label>
                                    <label htmlFor="radio2">
                                        <input
                                            id="radio2"
                                            type="radio"
                                            name="radio"
                                            value="2"
                                            onChange={handleTextColorChange}
                                        />
                                        <span className={cx('outer', { active: backgroundColor === '#f5ebcd' })}>
                                            <span className={cx('inner', 't2')}></span>
                                        </span>
                                    </label>
                                    <label htmlFor="radio3">
                                        <input
                                            id="radio3"
                                            type="radio"
                                            name="radio"
                                            value="3"
                                            onChange={handleTextColorChange}
                                        />
                                        <span className={cx('outer', { active: backgroundColor === '#e2eee2' })}>
                                            <span className={cx('inner', 't3')}></span>
                                        </span>
                                    </label>
                                    <br />
                                    <label htmlFor="radio4">
                                        <input
                                            id="radio4"
                                            type="radio"
                                            name="radio"
                                            value="4"
                                            onChange={handleTextColorChange}
                                        />
                                        <span className={cx('outer', { active: backgroundColor === '#e1e8e8' })}>
                                            <span className={cx('inner', 't4')}></span>
                                        </span>
                                    </label>
                                    <label htmlFor="radio5">
                                        <input
                                            id="radio5"
                                            type="radio"
                                            name="radio"
                                            value="5"
                                            onChange={handleTextColorChange}
                                        />
                                        <span className={cx('outer', { active: backgroundColor === '#222' })}>
                                            <span className={cx('inner', 't5')}></span>
                                        </span>
                                    </label>
                                    <label htmlFor="radio6">
                                        <input
                                            id="radio6"
                                            type="radio"
                                            name="radio"
                                            value="6"
                                            onChange={handleTextColorChange}
                                        />
                                        <span className={cx('outer', { active: backgroundColor === '#fff' })}>
                                            <span className={cx('inner', 't6')}></span>
                                        </span>
                                    </label>
                                </div>

                                <div className={cx('input-group', 'plus-minus-input')}>
                                    <h4 className={cx('setting-title')}>Cỡ chữ:</h4>
                                    <div className={cx('input-group-button')}>
                                        <button
                                            type="button"
                                            className={cx('button', 'hollow', 'circle')}
                                            data-quantity="minus"
                                            data-field="quantity"
                                        >
                                            <FontAwesomeIcon icon={faCircleMinus} onClick={decreaseFontSize} />
                                        </button>
                                    </div>
                                    <input
                                        className={cx('input-group-field')}
                                        type="number"
                                        name="quantity"
                                        value={fontSize}
                                    />
                                    <div className={cx('input-group-button')}>
                                        <button
                                            type="button"
                                            className={cx('button', 'hollow', 'circle')}
                                            data-quantity="plus"
                                            data-field="quantity"
                                        >
                                            <FontAwesomeIcon icon={faCirclePlus} onClick={increaseFontSize} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    isOpen={modalIsOpen2}
                    onAfterOpen={afterOpenModal2}
                    onRequestClose={closeModal2}
                    style={customStyles2}
                    contentLabel="Example Modal"
                >
                    <div className={cx('modal')}>
                        <div className={cx('button-group')}>
                            <h2 className={cx('modal-title')} ref={(_subtitle) => (subtitle = _subtitle)}>
                                Danh sách chương
                            </h2>
                            <FontAwesomeIcon icon={faXmark} onClick={closeModal2} className={cx('close-btn')} />
                        </div>
                        <div>
                            <List bookID={bookID} />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Chapter;
