import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import ANovelDetail from '../../components/ANovelDetail';
import styles from './AuthorNovelDetail.module.scss';
import { getBookById } from '../../api/api';

const cx = classNames.bind(styles);

function AuthorNovelDetail() {
    const navigate = useNavigate();
    const { bookID } = useParams();
    const [detailBook, setdetailBook] = useState({});
    const bookByID = async () => {
        const res = await getBookById(bookID);
        console.log('getBookById', res);
        if (res && res.data && res.data.DT) {
            return res.data.DT;
        }
    };
    useEffect(() => {
        const fetchNovels = async () => {
            const novels = await bookByID();
            setdetailBook(novels);
        };
        fetchNovels();
    }, []);
    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('cover-novel-img')}>
                    <img src={detailBook.poster} alt="cover-img" className={cx('cover-img')} />
                </div>
                <div className={cx('novel-info')}>
                    <h2 className={cx('name')}>{detailBook.bookName}</h2>
                    <p className={cx('author')}>
                        <p>Thể loại</p>
                        <p className={cx('author-link')}>{detailBook.tag}</p>
                    </p>
                    <div className={cx('stat')}>
                        <div className={cx('stat-item')}>
                            <h3>{detailBook.Chapters ? detailBook.Chapters.length : 0}</h3>
                            <p>Chương</p>
                        </div>
                        <div className={cx('stat-item')}>
                            <h3>{detailBook.follow}</h3>
                            <p>Lượt đọc</p>
                        </div>
                        <div className={cx('stat-item')}>
                            <h3>{detailBook.view}</h3>
                            <p>Theo dõi</p>
                        </div>
                        <div className={cx('stat-item')}>
                            <h3>No._</h3>
                            <p>Xếp hạng</p>
                        </div>
                    </div>

                    <div className={cx('buttons')}>
                        <Button
                            primary2
                            tag
                            leftIcon={<FontAwesomeIcon icon={faPlusSquare} />}
                            onClick={() => {
                                navigate(`/author/create-chapter/${detailBook.bookID}`);
                            }}
                        >
                            Viết chương mới
                        </Button>
                        <Button primary2 tag to={`/book/${detailBook.bookID}`}>
                            Xem chi tiết trên trang web
                        </Button>
                    </div>
                </div>
            </div>
            <ANovelDetail bookID={bookID} />
        </div>
    );
}

export default AuthorNovelDetail;
