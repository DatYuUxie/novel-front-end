import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classNames from 'classnames/bind';
import { getBookByUserId } from '../../api/api';
import { getAllBooks } from '../../api/api';
import UpdateItem from './IncomeListBooks';
import styles from './IncomeListBooks.module.scss';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function IncomeListBooks({ admin = false }) {
    const { userID } = useParams();
    const [rank, setRank] = useState({});
    const Novels = async () => {
        try {
            let res = await getBookByUserId(userID);
            if (res && res.data && res.data.DT) {
                return res.data.DT;
            }
        } catch (error) {
            console.log(error);
        }
    };
    const allNovels = async () => {
        try {
            let res = await getAllBooks();
            if (res && res.data && res.data.DT) {
                return res.data.DT;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchNovels = async () => {
            const novels = admin ? await allNovels() : await Novels();
            setRank(novels);
        };
        fetchNovels();
    }, []);
    return (
        <div className={cx('container')}>
            <h2>Tác phẩm</h2>

            <div className={cx('banner-container')}>
                {Object.values(rank).map((item, index) => {
                    return <UpdateItem data={item} />;
                })}
            </div>
        </div>
    );
}

export default IncomeListBooks;
