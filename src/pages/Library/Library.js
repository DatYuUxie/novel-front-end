import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookshelf } from '../../api/api';
import '../../assets/css/grid.css';
import Button from '../../components/Button';
import NovelItem2 from '../../components/NovelItem2';
import styles from './Library.module.scss';
const cx = classNames.bind(styles);
function Library() {
    const [novels, setNovels] = useState([]);
    const { userID } = useParams();
    const [tab, setTab] = useState(0);
    const [editClick, setEditClick] = useState(true);
    const [listId, setListId] = useState([]);
    const active = cx('active');
    const hidden = cx('hidden');
    const toggleClick = () => {
        let temp = editClick;
        setEditClick(!temp);
    };
    const getBookshelfData = async () => {
        const response = await getBookshelf(userID);
        const data = response.data.DT.map((book) => ({
            bookID: book.bookID,
            poster: book.poster,
            name: book.bookName,
            rank: book.ratting,
            tag: book.tag,
            des: book.description,
        }));
        setNovels(data);
    };
    useEffect(() => {
        getBookshelfData();
    }, []);

    const handleSelectId = (selectedId, optionIn = false) => {
        if (optionIn) {
            if (!listId.includes(selectedId)) {
                setListId([...listId, selectedId]); 
              }
        } else {
            setListId(listId.filter((id) => id !== selectedId));
        }
    };
    const handleDelete=()=>{
        console.log('listId: ', listId);

    }

    return (
        <div>
            <div className={cx('head')}>
                <h1>Kệ sách</h1>
                <div className={cx('tabs-parent')}>
                    <div className={cx('tabs')}>
                        <div className={cx('tab-item', tab === 0 && active)} onClick={() => setTab(0)}>
                            Kệ sách
                        </div>
                        <div className={cx('tab-item', tab === 1 && active)} onClick={() => setTab(1)}>
                            Lịch sử
                        </div>
                    </div>
                    <div className={cx(editClick === true && hidden)}>
                        <Button className={cx('remove')} onClick={handleDelete} leftIcon={<FontAwesomeIcon icon={faTrashAlt} />}>
                            Xóa
                        </Button>
                        <Button className={cx('cancel')} onClick={toggleClick}>
                            Hủy
                        </Button>
                    </div>

                    <Button
                        className={cx('edit', editClick === false && hidden)}
                        onClick={toggleClick}
                        leftIcon={<FontAwesomeIcon icon={faEdit} />}
                    >
                        Chỉnh sửa
                    </Button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className="grid">
                    <div className="row">
                        {novels.map((item, index) => {
                            return <NovelItem2 data={item} isEdit={!editClick} handleSelectId={handleSelectId} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Library;
