import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './BookBanner.module.scss';

const cx = classNames.bind(styles);

function BookBanner() {
    return (
        <div className={cx('container')}>
            <div className={cx('group')}>
                <h1>Tags</h1>
                <div className={cx('group-tag')}>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                    <Button rounded tag className={cx('tag')}>
                        #Đọc truyện
                    </Button>
                </div>
            </div>
            <div className={cx('group')}>
                <h1>Điểm xếp hạng tuần </h1>
                <div className={cx('group-tag-2')}>
                    <div className={cx('group-item')}>
                        <div className={cx('item')}>
                            <div className={cx('cover-img')}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEX////1Mmb2MWX2N231MWX1MWX/////wtL8nbf+9vj+vM38mLS/meY4AAAABXRSTlMB5qYc7ekm068AAABrSURBVDjLYyADMCuGYgAhA6CESSgW4AyUUMUmEQSUEMUmEQiUCMUKqC8xLQ0JZCJJpKEAKkoQtBwD0FlieTkUVKFJlMMBbSQwLR8sQbKjAwi6sUh0gAHtJBCW09vnODMnzuyMswDAXWSQDgDUBFQyX50DMwAAAABJRU5ErkJggg=="
                                    alt="img"
                                    className={cx('img')}
                                />
                            </div>
                            <h1>NO.16</h1>
                            <p>BXH đọc</p>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('cover-img')}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEX////1Mmb2MWX2N231MWX1MWX/////wtL8nbf+9vj+vM38mLS/meY4AAAABXRSTlMB5qYc7ekm068AAABrSURBVDjLYyADMCuGYgAhA6CESSgW4AyUUMUmEQSUEMUmEQiUCMUKqC8xLQ0JZCJJpKEAKkoQtBwD0FlieTkUVKFJlMMBbSQwLR8sQbKjAwi6sUh0gAHtJBCW09vnODMnzuyMswDAXWSQDgDUBFQyX50DMwAAAABJRU5ErkJggg=="
                                    alt="img"
                                    className={cx('img')}
                                />
                            </div>
                            <h1>NO.6</h1>
                            <p>BXH Phiếu thưởng</p>
                        </div>
                    </div>
                    <div className={cx('button')}>
                    <Button  primary2 tag leftIcon={<FontAwesomeIcon icon={faPlusSquare} />} >
                        Bình chọn
                    </Button>
                    <Button  primary2 tag leftIcon={<FontAwesomeIcon icon={faPlusSquare} />} >
                        Tặng thưởng
                    </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default BookBanner;
