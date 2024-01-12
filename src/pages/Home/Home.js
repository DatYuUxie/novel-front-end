import Banner from '../../components/Banner';
import NovelItem from '../../components/NovelItem';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Ranking from '../../components/Ranking';
import Button from '../../components/Button';

import '../../assets/css/grid.css';
const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Banner />
            <div className={cx('container')}>
                <h2 className={cx('title')}>Tiếp tục xem</h2>

                <div className={cx('continued')}>
                    <NovelItem />
                    <NovelItem />
                    <NovelItem />
                    <NovelItem />
                    <NovelItem />
                </div>
            </div>
            <div className={cx('ranking-container')}>
                <Ranking />
                <Ranking />
                <Ranking />
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
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                            <NovelItem />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
