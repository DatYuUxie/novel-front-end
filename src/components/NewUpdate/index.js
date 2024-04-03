import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import classNames from 'classnames/bind';
import styles from './NewUpdate.module.scss';
import UpdateItem from './UpdateItem';
import { getBooks } from '../../api/api';
import { set } from 'immutable';

const cx = classNames.bind(styles);

function NewUpdate() {
    const [rank, setRank] = useState({});
    const Novels = async () => {
        try {
            let res = await getBooks();
            if (res && res.data && res.data.DT) {
                return res.data.DT;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchNovels = async () => {
            const novels = await Novels();
            setRank(novels);
        };
        fetchNovels();
    }, []);
    return (
        <div className={cx('container')}>
            <h2>Sách mới cập nhật</h2>

            <div className={cx('banner-container')}>
                {Object.values(rank).map((item, index) => {
                    return <UpdateItem data={item} />;
                })}
            </div>
        </div>
    );
}

export default NewUpdate;
