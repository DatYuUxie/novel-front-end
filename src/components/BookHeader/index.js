import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlusSquare
} from '@fortawesome/free-solid-svg-icons';

import styles from './BookHeader.module.scss';

const cx = classNames.bind(styles);

function BookHeader({bookId}) {
    const [rating, setRating] = useState(5);

    console.log("bookId in book-header: " , bookId);


    const book = async () => {
        console.log('bookId in book-header 2:', bookId);
        const res = await getBookById(bookId);
        console.log('getBookByID', res);
    };
    useEffect(() => {
        book();
    }, []);
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('cover-novel-img')}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                    alt="cover-img"
                    className={cx('cover-img')}
                />
            </div>
            <div className={cx('novel-info')}>
                <h1 className={cx('name')}>Cầu ma</h1>
                <p className={cx('author')}>
                    <p>Tác giả</p>
                    <p  className={cx('author-link')}>Nhĩ Căn</p>
                </p>
                <div className={cx('stat')}>
                    <div className={cx('stat-item')}>
                        <h2>999</h2>
                        <p>Chương</p>
                    </div>
                    <div className={cx('stat-item')}>
                        <h2>99.9k</h2>
                        <p>Lượt đọc</p>
                    </div>
                    <div className={cx('stat-item')}>
                        <h2>99.9k</h2>
                        <p>Theo dõi</p>
                    </div>
                </div>
                <div className={cx('rating')}>
                    <Rating onClick={handleRating} initialValue={rating} readonly/>
                    <h3>4.9</h3>
                    <h3>/5</h3>
                    <p className={cx('rates')}>(99 lượt)</p>
                </div>
                <div className={cx('buttons')}>
                    <Button primary2 tag>
                        Đọc truyện
                    </Button>
                    <Button primary2 tag leftIcon={<FontAwesomeIcon icon={faPlusSquare} />}>
                        Thêm vào kệ sách
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default BookHeader;
