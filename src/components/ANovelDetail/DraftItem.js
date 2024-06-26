import Button from '../Button';
import styles from './BookContent.module.scss';
import classNames from 'classnames/bind';
import { getDraftChapter, updatepublishChapter, deleteChapter } from '../../api/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const cx = classNames.bind(styles);
function DraftItem({ bookID }) {
    const navigate = useNavigate();

    const [draftChapter, setDraftChapter] = useState([]);
    const fetchDraft = async () => {
        const draft = await getDraft();
        setDraftChapter(draft);
    };
    const getDraft = async () => {
        let res = await getDraftChapter(bookID);
        if (res && res.data && res.data.DT) {
            return res.data.DT;
        }
    };
    const publishChapter = async (id) => {
        let res = await updatepublishChapter(id);
        if (res && res.data && res.data.DT) {
            fetchDraft();
            return res.data.DT;
        }
    };

    const handleDeleteChapter = async (id) => {
        try {
            let res = await deleteChapter(id);
            console.log('res', res);
            if (res && res.data && res.data.EC === 0) {
                fetchDraft();
                message.success('Xóa chương thành công');
            }
        } catch (error) {
            message.error('Xóa chương thất bại');
        }
    };

    const handleEditChapter = (bookID, orderNumber) => {
        navigate(`/author/edit-chapter/${bookID}/${orderNumber}`);
    };
    useEffect(() => {
        fetchDraft();
    }, []);
    return (
        <>
            {draftChapter.map((chapter, index) => (
                <div key={index} className={cx('draft')}>
                    <a onClick={() => handleEditChapter(bookID, chapter.orderNumber)}>
                        <h4>
                            Chương {chapter.orderNumber}: {chapter.chapterName}
                        </h4>
                    </a>
                    <div className={cx('action')}>
                        <p>
                            {new Date(chapter.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                        </p>
                        <Button primary2 className={cx('tag')} onClick={() => publishChapter(chapter.chapterID)}>
                            xuất bản
                        </Button>
                        <Button primary className={cx('tag')} onClick={() => handleDeleteChapter(chapter.chapterID)}>
                            Xóa
                        </Button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default DraftItem;
