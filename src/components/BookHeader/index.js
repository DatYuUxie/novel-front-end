import classNames from 'classnames/bind';
import React, { useEffect, useState, useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { getBookById, addToBookshelf } from '../../api/api';
import { UserContext } from '../../context/UserContext';

import styles from './BookHeader.module.scss';
import { message } from 'antd';

const cx = classNames.bind(styles);

function BookHeader({ bookID }) {
    const [rating, setRating] = useState(5);
    const [book, setBook] = useState({});
    const { user } = useContext(UserContext);
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
    };
    const bookByID = async () => {
        const res = await getBookById(bookID);
        if (res && res.data && res.data.DT) {
            return res.data.DT;
        }
    };
    const handleAddToBookshelf = async () => {
        try {
            const data = {
                bookID: bookID,
                userID: user.account.userID,
            };
            const res = await addToBookshelf(data);
            if (res && res.data && res.data.EC === 0) {
                message.success(res.data.EM);
            } else {
                message.error(res.data.EM);
            }
        } catch (error) {
            message.error(error);
        }
    };
    useEffect(() => {
        const fetchNovels = async () => {
            const novels = await bookByID();
            setBook(novels);
        };
        fetchNovels();
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('cover-novel-img')}>
                <img src={book.poster} alt="cover-img" className={cx('cover-img')} />
            </div>
            <div className={cx('novel-info')}>
                <h1 className={cx('name')}>{book.bookName}</h1>
                <p className={cx('author')}>
                    <p>Tác giả</p>
                    <p className={cx('author-link')}>{book.author}</p>
                </p>
                <div className={cx('stat')}>
                    <div className={cx('stat-item')}>
                        <h2>{book.Chapters ? book.Chapters.length : 0}</h2>
                        <p>Chương</p>
                    </div>
                    <div className={cx('stat-item')}>
                        <h2>{book.view}</h2>
                        <p>Lượt đọc</p>
                    </div>
                    <div className={cx('stat-item')}>
                        <h2>{book.follow}</h2>
                        <p>Theo dõi</p>
                    </div>
                </div>
                <div className={cx('rating')}>
                    <Rating onClick={handleRating} initialValue={rating} readonly />
                    <h3>{book.ratting}</h3>
                    <h3>/5</h3>
                    <p className={cx('rates')}>(99 lượt)</p>
                </div>
                <div className={cx('buttons')}>
                    <Button primary2 tag>
                        Đọc truyện
                    </Button>
                    <Button
                        primary2
                        tag
                        leftIcon={<FontAwesomeIcon icon={faPlusSquare} />}
                        onClick={handleAddToBookshelf}
                    >
                        Thêm vào kệ sách
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default BookHeader;
