import SearchSidebar from '../../components/SearchSidebar';
import ListResult from '../../components/ListResult';
import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
import { getBooks } from '../../api/api';
import { useEffect, useState, useCallback } from 'react';

const cx = classNames.bind(styles);
function SearchResult() {
    const [mine, setMine] = useState([]);
    const [allResult, setAllResult] = useState([]);

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
            setAllResult(novels);
            setMine(novels);
        };
        fetchNovels();
    }, []);

    const handleTagChange = useCallback((selectedTags) => {
        if (selectedTags == 'Tất cả') {
            setMine(allResult);
        } else {
            let result = allResult.filter((item) => item.tag === selectedTags);
            setMine(result);
        }
        console.log("minnnnnne",mine);
    }, [mine]);

    return (
        <div className={cx('container')}>
            <SearchSidebar onTagChange={handleTagChange} />
            <div className={cx('content')}>
                <ListResult data={mine} />
            </div>
        </div>
    );
}

export default SearchResult;
