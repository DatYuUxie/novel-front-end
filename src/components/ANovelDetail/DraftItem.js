import Button from '../Button';
import styles from './BookContent.module.scss';
import classNames from 'classnames/bind';
import { getDraftChapter, updatepublishChapter } from '../../api/api';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function DraftItem({ bookID }) {
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
    useEffect(() => {
        fetchDraft();
    }, []);
    return (
        <>
            {draftChapter.map((chapter, index) => (
                <div key={index} className={cx('draft')}>
                    <h4>
                        Chương {chapter.orderNumber}: {chapter.chapterName}
                    </h4>
                    <div className={cx('action')}>
                        <p>
                            {new Date(chapter.createdAt).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                        </p>
                        <Button primary2 className={cx('tag')} onClick={() => publishChapter(chapter.chapterID)}>
                            xuất bản
                        </Button>
                        <Button primary className={cx('tag')}>
                            Xóa
                        </Button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default DraftItem;
