import RankingSidebar from '../../components/RankingSidebar';
import Ranking2 from '../../components/Ranking2';
import classNames from 'classnames/bind';
import styles from './Rankings.module.scss';
import { getBooks } from '../../api/api';
import { useCallback, useEffect, useState } from 'react';
import RankingOrder from '../../services/RankingOrder';
const cx = classNames.bind(styles);
function Rankings() {
    const [novels, setNovels] = useState([]);
    const [novelsSorted, setNovelsSorted] = useState([]);
    const [tag, setTag] = useState('Thịnh hành');

    const listNovels = async () => {
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
            const novel = await listNovels();
            setNovels(novel);
            let result = RankingOrder(novel, 'Thịnh hành');
            setNovelsSorted(result);
            console.log(result);
        };
        fetchNovels();
    }, []);
    useEffect(() => {
        let result = RankingOrder(novels, tag);
        setNovelsSorted(result);
    }, [tag]);

    const handleTagChange = (selectedTags) => {
        setTag(selectedTags);
    };

    return (
        <div className={cx('container')}>
            <RankingSidebar onTagChange={handleTagChange} />
            <div className={cx('content')}>
                <Ranking2 data={novelsSorted} />
            </div>
        </div>
    );
}

export default Rankings;
