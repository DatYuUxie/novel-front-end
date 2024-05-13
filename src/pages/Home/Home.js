import Banner from '../../components/Banner';
import NovelItem from '../../components/NovelItem';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Ranking from '../../components/Ranking';
import Button from '../../components/Button';

import '../../assets/css/grid.css';
import NewUpdate from '../../components/NewUpdate';
import { useEffect, useState } from 'react';
import { Pagination } from 'antd';

import { getBooks } from '../../api/api';

const cx = classNames.bind(styles);

const rank1 = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCyyIyeMtWco-50cvlzIDVnKJjMB4UsfNrw&usqp=CAU',
        name: 'Ta Tại Quỷ Dị Thế Giới Cẩn Thận Tu Tiên',
        rank: '1',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg',
        name: 'Cổ chân nhân',
        rank: '2',
        tag: 'Ngôn tình',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU',
        name: 'Cầu ma',
        rank: '3',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU',
        name: 'Nhất niệm vĩnh hằng',
        rank: '4',
        tag: 'Huyền huyễn',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLvzrKESPLTFFmRyjoQtPpGpKdsMoCKZTAyeFZvnPjD0TyAPjXXtY-l9WuZw0QCxVjwQ&usqp=CAU',
        name: 'Linh cảnh hành giả',
        rank: '5',
        tag: 'Khoa học',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
];

const rank2 = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCyyIyeMtWco-50cvlzIDVnKJjMB4UsfNrw&usqp=CAU',
        name: 'Ta Tại Quỷ Dị Thế Giới Cẩn Thận Tu Tiên',
        rank: '1',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg',
        name: 'Cổ chân nhân',
        rank: '2',
        tag: 'Ngôn tình',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK4QteMlYJ4p_AQoqS6KXh_UcisUWNZ0pefn4lXHFfoyxR9tSiojpn13flHdebZqLREM&usqp=CAU',
        name: 'Tiên nghịch',
        rank: '3',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA5L-BqlT7_nZ2rdyPwsN2IyvjnHdWxYj0w6xB9ay87meEjqeda_i10fr_VkaRaPzejE&usqp=CAU',
        name: 'Ta theo hệ chữa trị trò chơi',
        rank: '4',
        tag: 'Võng du',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWfMeHk1patn69dUQ4N5nNvpjAUedCczWkkhAvQpARX6IyKkr9U5ZJAzM-PabEnbg7M&usqp=CAU',
        name: 'Đạo quỷ dị tiên',
        rank: '5',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
];

const rank3 = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCyyIyeMtWco-50cvlzIDVnKJjMB4UsfNrw&usqp=CAU',
        name: 'Ta Tại Quỷ Dị Thế Giới Cẩn Thận Tu Tiên',
        rank: '1',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU',
        name: 'Cầu ma',
        rank: '2',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU',
        name: 'Nhất niệm vĩnh hằng',
        rank: '3',
        tag: 'Huyền huyễn',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK4QteMlYJ4p_AQoqS6KXh_UcisUWNZ0pefn4lXHFfoyxR9tSiojpn13flHdebZqLREM&usqp=CAU',
        name: 'Tiên nghịch',
        rank: '4',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWfMeHk1patn69dUQ4N5nNvpjAUedCczWkkhAvQpARX6IyKkr9U5ZJAzM-PabEnbg7M&usqp=CAU',
        name: 'Đạo quỷ dị tiên',
        rank: '5',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
];

function Home() {
    const [mine, setMine] = useState([]);
    const [page, setPage] = useState(1);
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
    // let rank1, rank2, rank3;
    useEffect(() => {
        const fetchNovels = async () => {
            const novels = await Novels();
            setMine(novels);
        };
        fetchNovels();
    }, []);
    return (
        <>
            <div className={cx('top')}>
                <Banner />
                <NewUpdate />
            </div>

            <div className={cx('container')}>
                <h2 className={cx('title')}>Tiếp tục xem</h2>

                <div className={cx('continued')}>
                    {mine.map((item, index) => {
                        return <NovelItem data={item} />;
                    })}
                </div>
            </div>
            <div className={cx('ranking-container')}>
                <Ranking title="Top thịnh hành" data={rank1} />
                <Ranking title="Top đọc nhiều" data={rank2} />
                <Ranking title="Top đề cử" data={rank3} />
            </div>

            <div className={cx('propose')}>
                <h2>Đề cử cho bạn</h2>
                <div className={cx('tags')}>
                    <Button text tag>
                        Tất cả
                    </Button>
                    <Button text tag>
                        Huyền huyễn
                    </Button>
                    <Button text tag>
                        Ngôn tình
                    </Button>
                    <Button text tag>
                        Khoa học
                    </Button>
                    <Button text tag>
                        Đô thị
                    </Button>
                    <Button text tag>
                        Huyền huyễn
                    </Button>
                    <Button text tag>
                        Ngôn tình
                    </Button>
                    <Button text tag>
                        Khoa học
                    </Button>
                    <Button text tag>
                        Đô thị
                    </Button>
                </div>
                <div className={cx('content')}>
                    <div className="grid">
                        <div className="row">
                            {Object.values(mine)
                                .slice((page - 1) * 12, page * 12)
                                .map((item, index) => (
                                    <NovelItem data={item} />
                                ))}
                            <Pagination
                                className={cx('pagination')}
                                defaultCurrent={1}
                                current={page}
                                total={Math.round((Object.values(mine).length / 12) * 10)}
                                onChange={(value) => setPage(value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
