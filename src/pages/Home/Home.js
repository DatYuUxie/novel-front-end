import { Pagination } from 'antd';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { getBooks, getBookshelf } from '../../api/api';
import '../../assets/css/grid.css';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import NewUpdate from '../../components/NewUpdate';
import NovelItem from '../../components/NovelItem';
import Ranking from '../../components/Ranking';
import { UserContext } from '../../context/UserContext';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [mine, setMine] = useState([]);
    const [page, setPage] = useState(1);
    const [rank1, setRank1] = useState([]);
    const [rank2, setRank2] = useState([]);
    const [rank3, setRank3] = useState([]);
    const [library, setLibrary] = useState([]);
    let { user } = useContext(UserContext);
    console.log(user);
    const Novels = async () => {
        try {
            let res = await getBooks();
            if (res && res.data && res.data.DT) {
                // Convert the view count to integer
                res.data.DT.forEach((item) => (item.view = parseInt(item.view)));
                res.data.DT.forEach((item) => (item.vote = parseInt(item.vote)));

                // Create copies of the array
                let dataCopy1 = [...res.data.DT];
                let dataCopy2 = [...res.data.DT];
                let dataCopy3 = [...res.data.DT];

                // Sort the data in descending order of views
                let sortedData1 = dataCopy1.sort((a, b) => b.view + b.vote * 5 - (a.view + a.vote * 5));
                let sortedData2 = dataCopy2.sort((a, b) => b.view - a.view);
                let sortedData3 = dataCopy3.sort((a, b) => b.vote - a.vote);

                // Get the top 5 books
                let top5Trending = sortedData1.slice(0, 5);
                let top5View = sortedData2.slice(0, 5);
                let top5vote = sortedData3.slice(0, 5);
                setRank1(top5Trending);
                setRank2(top5View);
                setRank3(top5vote);
                return res.data.DT;
            }
        } catch (error) {
            console.log(error);
        }
    };
    // let rank1, rank2, rank3;
    const getBookshelfData = async () => {
        console.log('2');

        if (user.isAuthenticated) {
            try {
                const response = await getBookshelf(user.account.userID);
                const data = response.data.DT.map((book) => ({
                    bookID: book.bookID,
                    poster: book.poster,
                    bookName: book.bookName,
                    ratting: book.ratting,
                    tag: book.tag,
                    description: book.description,
                }));

                setLibrary(data);
                console.log('data', data);
            } catch (error) {
                console.log(error);
            }
        }
    };
    useEffect(() => {
        const fetchNovels = async () => {
            const novels = await Novels();
            setMine(novels);
        };
        fetchNovels();
    }, []);
    useEffect(() => {
        console.log('1');

        getBookshelfData();
    }, [user]);
    console.log('library', library);
    return (
        <>
            <div className={cx('top')}>
                <Banner />
                <NewUpdate />
            </div>
            {library.length > 0 && (
                <div className={cx('container')}>
                    <h2 className={cx('title')}>Tiếp tục xem</h2>

                    <div className={cx('continued')}>
                        {library.map((item, index) => {
                            return <NovelItem data={item} library />;
                        })}
                    </div>
                </div>
            )}

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
                        Tiên hiệp
                    </Button>
                    <Button text tag>
                        Lịch sử
                    </Button>
                    <Button text tag>
                        Kì ảo
                    </Button>
                    <Button text tag>
                        Quân sự
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
