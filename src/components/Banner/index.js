import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('container')}>
<h2>Top sách tuần</h2>

        <div className={cx('banner-container')}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div
                        className={cx('banner-container-1')}
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.4) 55%, rgba(1, 1, 1, 1)),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU")`,
                            backgroundPosition: 'center center no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={cx('cover-banner')}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                                alt="cover-img"
                                className={cx('cover-img')}
                            />
                            <div className={cx('novel-info')}>
                                <h2>Shadow Slave</h2>
                                <p className={cx('novel-des')}>
                                    Growing up in poverty, Sunny never expected anything good from life. However, even
                                    he did not anticipate being chosen by the Nightmare Spell and becoming However, even
                                    he did not anticipate being chosen by the Nightmare Spell and becoming
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={cx('banner-container-1')}
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.4) 55%, rgba(1, 1, 1, 1)), url("https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg")`,
                            backgroundPosition: 'center center no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={cx('cover-banner')}>
                            <img
                                src="https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg"
                                alt="cover-img"
                                className={cx('cover-img')}
                            />
                            <div className={cx('novel-info')}>
                                <h2>Shadow Slave</h2>
                                <p className={cx('novel-des')}>
                                    Growing up in poverty, Sunny never expected anything good from life. However, even
                                    he did not anticipate being chosen by the Nightmare Spell and becoming However, even
                                    he did not anticipate being chosen by the Nightmare Spell and becoming
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={cx('banner-container-1')}
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.4) 55%, rgba(1, 1, 1, 1)),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU")`,
                            backgroundPosition: 'center center no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={cx('cover-banner')}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU"
                                alt="cover-img"
                                className={cx('cover-img')}
                            />
                            <div className={cx('novel-info')}>
                                <h2>Shadow Slave</h2>
                                <p className={cx('novel-des')}>
                                    Growing up in poverty, Sunny never expected anything good from life. However, even
                                    he did not anticipate being chosen by the Nightmare Spell and becoming However, even
                                    he did not anticipate being chosen by the Nightmare Spell and becoming
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
}

export default Banner;
