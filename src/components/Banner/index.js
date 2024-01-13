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
                                    <h2>Cầu ma</h2>
                                    <p className={cx('novel-des')}>
                                        Đối với người bình thường, dù mười năm không là một đời nhưng cũng là hồi ức.
                                        Mười năm trước có lẽ bên cạnh ngươi có người làm bạn, mười năm trước, có lẽ
                                        ngươi là thiếu niên thỏa thê mãn nguyện, mười năm trước có lẽ ngươi không hiểu
                                        quý trọng, mười năm trước có lẽ người vui vẻ mơ lòng, cười ngây thơ vô âu lo.
                                        Nhưng mười năm sau. Ngươi sẽ chỉ nhìn trời xanh mây trắng, nhìn trời mọc trời
                                        lặn, cảm thán mình, cuối cùng vẫn là kẻ bình thường.
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
                                    <h2>Cổ chân nhân</h2>
                                    <p className={cx('novel-des')}>
                                        Tình, vốn dĩ không nói được. Là ai đem tương tư ngàn năm này kéo dài thật dài,
                                        từ khi thiên hoang vẫn còn là đại lục, đến khi địa lão đã thành một đảo trên đại
                                        dương. Một phút ngắm nhìn, kia chính là lần đầu gặp gỡ. Những ký ức từng quen
                                        biết mơ hồ còn đó, nhưng trong ngàn năm phong vân biến chuyển như bụi rơi vào
                                        sông dài, muốn tìm đã không có dấu vết.
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
                                    <h2>Nhất niệm vĩnh hằng</h2>
                                    <p className={cx('novel-des')}>
                                        Trong gió tuyết đi xa, từ đây, đã không có tình, đã mất đi đau đớn, hắn đã không
                                        còn là hắn. Như một màn trong gió tuyết bức tranh, cái kia bức tranh danh tự,
                                        gọi là, nhân sinh nếu chỉ như lần đầu gặp gỡ.
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
