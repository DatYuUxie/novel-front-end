import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Library.module.scss';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import NovelItem2 from '../../components/NovelItem2';
import '../../assets/css/grid.css';
const cx = classNames.bind(styles);

function Library() {
    const [tab, setTab] = useState(0);
    const [editClick, setEditClick] = useState(true);

    const active = cx('active');
    const hidden = cx('hidden');
    const toggleClick = () => {
        let temp = editClick;
        setEditClick(!temp);
    };
    return (
        <div>
            <div className={cx('head')}>
                <h1>Kệ sách</h1>
                <div className={cx('tabs-parent')}>
                    <div className={cx('tabs')}>
                        <div className={cx('tab-item', tab == 0 && active)} onClick={() => setTab(0)}>
                            Kệ sách
                        </div>
                        <div className={cx('tab-item', tab == 1 && active)} onClick={() => setTab(1)}>
                            Lịch sử
                        </div>
                    </div>
                    <div className={cx(editClick == true && hidden)}>
                        <Button className={cx('remove')} leftIcon={<FontAwesomeIcon icon={faTrashAlt} />}>
                            Xóa
                        </Button>
                        <Button className={cx('cancel')} onClick={toggleClick}>
                            Hủy
                        </Button>
                    </div>

                    <Button
                        className={cx('edit', editClick == false && hidden)}
                        onClick={toggleClick}
                        leftIcon={<FontAwesomeIcon icon={faEdit} />}
                    >
                        Chỉnh sửa
                    </Button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className="grid">
                    <div className="row">
                        <NovelItem2 />
                        <NovelItem2 />
                        <NovelItem2 />
                        <NovelItem2 />
                        <NovelItem2 />
                        <NovelItem2 />
                        <NovelItem2 />
                        <NovelItem2 />
                        <NovelItem2 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Library;
