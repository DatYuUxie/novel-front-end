import Banner from '../../components/Banner';
import NovelItem from '../../components/NovelItem';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Ranking from '../../components/Ranking';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Banner />
            <div className={cx('container')}>
                <NovelItem />
                <NovelItem />
                <NovelItem />
                <NovelItem />
            </div>
            <Ranking />
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
        </>
    );
}

export default Home;
