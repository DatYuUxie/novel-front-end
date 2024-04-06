import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import ANovelDetail from '../../components/ANovelDetail';

import styles from './AuthorNovelDetail.module.scss';

const cx = classNames.bind(styles);

function AuthorNovelDetail() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('cover-novel-img')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                        alt="cover-img"
                        className={cx('cover-img')}
                    />
                </div>
                <div className={cx('novel-info')}>
                    <h2 className={cx('name')}>Shadow Slave</h2>
                    <p className={cx('author')}>
                        <p>Thể loại</p>
                        <p className={cx('author-link')}>Tiên hiệp</p>
                    </p>
                    <div className={cx('stat')}>
                        <div className={cx('stat-item')}>
                            <h3>999</h3>
                            <p>Chương</p>
                        </div>
                        <div className={cx('stat-item')}>
                            <h3>99.9k</h3>
                            <p>Số từ</p>
                        </div>
                        <div className={cx('stat-item')}>
                            <h3>99.9k</h3>
                            <p>Lượt đọc</p>
                        </div>
                        <div className={cx('stat-item')}>
                            <h3>99.9k</h3>
                            <p>Theo dõi</p>
                        </div>
                        <div className={cx('stat-item')}>
                            <h3>No._</h3>
                            <p>Xếp hạng</p>
                        </div>
                    </div>

                    <div className={cx('buttons')}>
                        <Button primary2 tag leftIcon={<FontAwesomeIcon icon={faPlusSquare} />} onClick={()=>{navigate('/create-chapter')}}>
                            Viết chương mới
                        </Button>
                        <Button primary2 tag>
                            Xem chi tiết trên trang web
                        </Button>
                    </div>
                </div>
            </div>
            <ANovelDetail />
        </div>
    );
}

export default AuthorNovelDetail;
