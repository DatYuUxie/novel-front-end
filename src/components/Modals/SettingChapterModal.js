import Modal from 'react-modal';



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
function SettingChapterModal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return ( <Modal
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
    </Modal> );
}

export default SettingChapterModal;