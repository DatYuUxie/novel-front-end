import classNames from 'classnames/bind';
import Button from '../../components/Button';
import List from '../../components/BookContent/List';
import Reviews from '../../components/BookContent/Reviews';
import { useState } from 'react';
import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faBook,
    faUserEdit,
    faClock,
    faExclamationTriangle,
    faPlusCircle,
    faPlusMinus,
    faPlugCirclePlus,
    faCirclePlus,
    faCircleMinus,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Chapter.module.scss';
import { Dialog, Widget, Revote, Reply, Playlist } from '../../assets/icon';
import { Link } from 'react-router-dom';
import { faCommenting } from '@fortawesome/free-regular-svg-icons';

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
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);
    const [mark, setMark] = useState(false);
    const active = cx('mark');

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
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('head')}>
                    <Button rounded tag leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
                        Chương trước
                    </Button>
                    <Button rounded tag rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                        Chương sau
                    </Button>
                </div>
                <p className={cx('name')}>Chương 3: Bỗng nhiên quay đầu</p>
                <div className={cx('info')}>
                    <Button info text leftIcon={<FontAwesomeIcon icon={faBook} />}>
                        Cầu ma
                    </Button>
                    <Button info text leftIcon={<FontAwesomeIcon icon={faUserEdit} />}>
                        Nhĩ Căn
                    </Button>
                    <Button info text leftIcon={<FontAwesomeIcon icon={faClock} />}>
                        20:20 1-1-2023
                    </Button>
                </div>

                <div className={cx('paragraph')} style={{ fontSize: fontSize + 'px' }}>
                    Núi! Thanh sơn! <br /> <br />
                    Đây là một dãy núi lớn liên miên không dứt, như một con rồng còn sống kéo dài cả vùng đất mênh mông
                    này, ở đấy có cỏ cây rậm rạp, còn có tiếng chim thú không ngừng vang lên. Xa xa nhìn lại, có thể
                    thấy trên núi có một phần giống như được năm ngọn núi hợp lại, trông như năm ngón tay người giơ lên
                    trời cao.
                    <br /> <br /> Trong đó có một ngọn núi trung đoạn(1) , một người thiếu niên đang tựa vào một khối đá
                    lớn hơi bị lõm sâu vào để tránh nắng. Bên cạnh hắn có một cái sọt mây, trong đó có dựng một chút
                    dược thảo, mùi thuốc tản phát ra lượn lờ khắp bốn phía. <br /> <br />
                    Thiếu niên này mi thanh mục tú, nhưng thân thể lại hơi ốm yếu, thoạt nhìn có chút suy nhược. Hắn mặc
                    một cái áo được làm bằng da thú, cổ đeo một vòng thú cốt màu trắng hình trăng lưỡi liềm, đầu tóc rối
                    bù được hắn dùng một sợi dây cây buộc lại. Hắn ngồi ở chỗ đó, tay cầm một quyển sách da do mười tấm
                    da thú dính lại, chăm chú đọc lấy.
                    <br /> <br /> - Tổ tông Man tộc, khai thiên tạo người, di lưu muôn đời đến nay...Vài người có sức
                    mạnh lớn lao được gọi là Man Sĩ (2), họ có thể bay lên trời chui xuống đất, dời núi lấp biển...có
                    Man Văn (3) thông thiên, hái được ngôi sao và nhật nguyệt... Thiếu niên đọc lấy, khẽ thở dài. -
                    Không có Man thể, làm sao trở thành Man...Man Sĩ...Man Sĩ...Tô Minh, ngươi chỉ có thể hái được chút
                    thảo dược, trở thành một y phu tầm thường mà thôi. <br /> <br />
                    Muốn trở thành Man sĩ ư? Thật xa xôi. Thiếu niên tự chế giễu chính mình, buông cuốn da thú trong tay
                    xuống, nhìn về phương trời xa mà ngơ ngẩn. Hắn đã đọc qua cuốn da thú này rất nhiều lần rồi, nói hắn
                    thuộc nằm lòng cũng không sai chút nào. - Trời là hình tròn, đất là hình vuông, như vô biên, phảng
                    phất vô tận... Trong lúc lẩm bẩm, đầu hắn lại ảo tưởng đến thế giới trong cuốn sách. <br /> <br />
                    Bất chợt trời đã tối dần mà hắn không hề hay biết, mây đen bắt đầu xuất hiện từ chân trời xa xôi.
                    Gió núi thổi qua mang theo hơi ẩm rơi xuống lá cây các cây cỏ trên núi, phát ra tiếng vang
                    rắc..rắc.. <br /> <br />
                    Đây là một dãy núi lớn liên miên không dứt, như một con rồng còn sống kéo dài cả vùng đất mênh mông
                    này, ở đấy có cỏ cây rậm rạp, còn có tiếng chim thú không ngừng vang lên. Xa xa nhìn lại, có thể
                    thấy trên núi có một phần giống như được năm ngọn núi hợp lại, trông như năm ngón tay người giơ lên
                    trời cao.
                    <br /> <br /> Trong đó có một ngọn núi trung đoạn(1), một người thiếu niên đang tựa vào một khối đá
                    lớn hơi bị lõm sâu vào để tránh nắng. Bên cạnh hắn có một cái sọt mây, trong đó có dựng một chút
                    dược thảo, mùi thuốc tản phát ra lượn lờ khắp bốn phía.
                </div>
                <div className={cx('foot')}>
                    <Button rounded tag leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
                        Chương trước
                    </Button>
                    <Button rounded tag rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
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

                        <Reviews />
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
                    className={cx('icon', mark == true && active)}
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
                                    <label for="radio1">
                                        <input id="radio1" type="radio" name="radio" />
                                        <span className={cx('outer')}>
                                            <span className={cx('inner', 't1')}></span>
                                        </span>
                                    </label>
                                    <label for="radio2">
                                        <input id="radio2" type="radio" name="radio" />
                                        <span className={cx('outer')}>
                                            <span className={cx('inner', 't2')}></span>
                                        </span>
                                    </label>
                                    <label for="radio3">
                                        <input id="radio3" type="radio" name="radio" />
                                        <span className={cx('outer')}>
                                            <span className={cx('inner', 't3')}></span>
                                        </span>
                                    </label>
                                    <br />
                                    <label for="radio4">
                                        <input id="radio4" type="radio" name="radio" />
                                        <span className={cx('outer')}>
                                            <span className={cx('inner', 't4')}></span>
                                        </span>
                                    </label>
                                    <label for="radio5">
                                        <input id="radio5" type="radio" name="radio" />
                                        <span className={cx('outer')}>
                                            <span className={cx('inner', 't5')}></span>
                                        </span>
                                    </label>
                                    <label for="radio6">
                                        <input id="radio6" type="radio" name="radio" />
                                        <span className={cx('outer')}>
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
                            <List />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Chapter;
