import PostItem from '../../components/PostItem';
import SettingSideBar from '../../components/SettingSideBar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateNovelComponent from '../../components/CreateNovelComponent';

import classNames from 'classnames/bind';
import styles from './CreateChapter.module.scss';

const cx = classNames.bind(styles);

function CreateChapter() {
    return (
        <div className={cx('container')}>
            <SettingSideBar tag={2} />
            <div className={cx('content')}>
                <form>
                    <label htmlFor="name">
                        <h4>Tên chương:</h4>
                    </label>
                    <input className={cx('name-input')} type="text" id="name" name="user_name" />
                    <label htmlFor="">
                        <h4>Nội dung chương:</h4>
                    </label>
                    <div
                        id="chapter-content"
                        className={cx('mce-content-body', 'cus-contend-bd')}
                        data-id="chapter-content"
                        contentEditable={true}
                        style={{
                            overflowY: 'hidden',
                            paddingLeft: '1px',
                            paddingRight: '1px',
                            minHeight: '500px',
                            outline: 'none',
                            border: '1px solid #e5e5e5',
                        }}
                    >
                        <p>
                            <br data-mce-bogus="1" />
                        </p>
                    </div>

                    <div className={cx('btns-box')}>
                    <button className={cx('btn-save')} type="submit">
                        Lưu
                    </button>
                    <button className={cx('btn-cancel')}>Hủy</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default CreateChapter;
