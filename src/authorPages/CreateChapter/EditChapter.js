// import PostItem from '../../components/PostItem';
// import SettingSideBar from '../../components/SettingSideBar';
// import { Fragment } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CreateNovelComponent from '../../components/CreateNovelComponent';
import { useParams } from 'react-router-dom';
import { useState, useMemo, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateChapter.module.scss';
import { createChapter, getChapterbyId } from '../../api/api';
import _ from 'lodash';
import { message } from 'antd';

const cx = classNames.bind(styles);

function EditChapter() {
    const [bookID, setBookID] = useState('');
    const { chapterID } = useParams();
    const [chapter, setChapter] = useState({});
    const contentRef = useRef(null);

    useEffect(() => {
        const getChapter = async () => {
            try {
                const response = await getChapterbyId(chapterID);
                setChapter(response.data.DT);
            } catch (error) {
                console.log('Failed to fetch chapter data:', error);
            }
        };
        getChapter();
    }, []);

    const handleOnchangeInput = (value, name) => {
        let _chapter = _.cloneDeep(chapter);
        _chapter[name] = value;
        _chapter['bookID'] = bookID; // always include bookID
        setChapter(_chapter);
    };
    const handleEditChapter = async (e) => {
        e.preventDefault();
        try {
            handleOnchangeInput(contentRef.current.innerText, 'content');
            console.log(contentRef.current.innerText)
            console.log('chapter', chapter);
            let newChapter = { ...chapter, content: contentRef.current.innerText };
            console.log('new chapter', newChapter);

            // let res = await updateChapter(newChapter);
            // console.log('res', res);
            // if (res.data.EC === 0) {
            //     message.success('Tạo chương thành công');
            // }
        } catch (error) {
            message.error('Tạo chương thất bại');
        }
    };
    return (
        <div className={cx('container')}>
            {/* <SettingSideBar tag={2} /> */}
            <div className={cx('content')}>
                <form onSubmit={handleEditChapter}>
                    <label htmlFor="name">
                        <h4>Chương số:</h4>
                    </label>
                    <input
                        className={cx('name-input')}
                        type="text"
                        id="orderNumber"
                        name="orderNumber"
                        value={chapter.orderNumber}
                        onChange={(e) => handleOnchangeInput(e.target.value, 'orderNumber')}
                    />
                    <label htmlFor="name">
                        <h4>Tên chương:</h4>
                    </label>
                    <input
                        className={cx('name-input')}
                        type="text"
                        id="chapterName"
                        name="chapterName"
                        value={chapter.chapterName}
                        onChange={(e) => handleOnchangeInput(e.target.value, 'chapterName')}
                    />
                    <label htmlFor="">
                        <h4>Nội dung chương:</h4>
                    </label>
                    <div
                        ref={contentRef}
                        id="content"
                        className={cx('mce-content-body', 'cus-contend-bd')}
                        data-id="content"
                        contentEditable={true}
                        style={{
                            overflowY: 'hidden',
                            paddingLeft: '1px',
                            paddingRight: '1px',
                            minHeight: '500px',
                            outline: 'none',
                            border: '1px solid #e5e5e5',
                        }}
                        // onInput={(e) => handleOnchangeInput(e.target.innerText, 'content')}
                    >
                        {chapter.content && chapter.content.split('\n').map((paragraph, index) => <p>{paragraph}</p>)}
                        <p>
                            <br data-mce-bogus="1" />
                        </p>
                    </div>

                    <div className={cx('btns-box')}>
                        <button className={cx('btn-save')} type="submit">
                            Lưu
                        </button>
                        <button
                            type="button"
                            className={cx('btn-cancel')}
                            onClick={() => {
                                window.history.back();
                            }}
                        >
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditChapter;
