import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchBook } from '../../api/api';
import ListResult from '../../components/ListResult';
import SearchSidebar from '../../components/SearchSidebar';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);
function SearchResult() {
    const { bookName } = useParams();
    const [mine, setMine] = useState([]);
    const [allResult, setAllResult] = useState([]);
    const handleSearch = async () => {
        try {
            let res = await searchBook(bookName);
            console.log('res', res);
            return res.data.DT;
        } catch (error) {
            console.log('error', error);
        }
    };
    useEffect(() => {
        const fetchNovels = async () => {
            const novels = await handleSearch();
            setAllResult(novels);
            setMine(novels);
        };
        fetchNovels();
    }, [bookName]);
    const handleTagChange = useCallback(
        (selectedTags) => {
            if (selectedTags === 'Tất cả') {
                setMine(allResult);
            } else {
                let result = allResult.filter((item) => item.tag === selectedTags);
                setMine(result);
            }
        },
        [mine],
    );
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
