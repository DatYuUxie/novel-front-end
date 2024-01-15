import React, { useState } from 'react';
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

const cx = classNames.bind(styles);

function NewUpdate() {
    const [rank, setRank] = useState([1, 2, 3, 4, 5]);

    return (
        <div className={cx('container')}>
            <h2>Sách mới cập nhật</h2>

            <div className={cx('banner-container')}>
                {rank.map((item, index) => {
                    return <UpdateItem />;
                })}
            </div>
        </div>
    );
}

export default NewUpdate;
