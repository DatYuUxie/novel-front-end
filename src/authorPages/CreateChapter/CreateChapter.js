import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateChapter.module.scss';
import { createChapter } from '../../api/api';
import _ from 'lodash';
import { message } from 'antd';

const cx = classNames.bind(styles);

function CreateChapter() {
    const { bookID } = useParams();
    // const defaultFormData = {
    //     orderNumber: '',
    //     chapterName: '',
    //     content: '',
    //     bookID: bookID,
    // };
    const defaultFormData = useMemo(
        () => ({
            orderNumber: '',
            chapterName: '',
            content: '',
            bookID: bookID,
        }),
        [bookID],
    ); // useMemo will only recompute the memoized value when bookID changes
    const [chapter, setChapter] = useState(defaultFormData);
    const handleOnchangeInput = (value, name) => {
        let _chapter = _.cloneDeep(chapter);
        _chapter[name] = value;
        _chapter['bookID'] = bookID; // always include bookID
        setChapter(_chapter);
    };
    const handleCreateChapter = async (e) => {
        e.preventDefault();
        try {
            // console.log('chapter', chapter);
            let res = await createChapter(chapter);
            console.log('res', res);
            if (res.data.EC === 0) {
                message.success('Tạo chương thành công');
            }
        } catch (error) {
            message.error('Tạo chương thất bại');
        }
    };
    return (
        <div className={cx('container')}>
            {/* <SettingSideBar tag={2} /> */}
            <div className={cx('content')}>
                <form onSubmit={handleCreateChapter}>
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
                        onInput={(e) => handleOnchangeInput(e.target.innerText, 'content')}
                    >
                        <p>
                            <br data-mce-bogus="3" />
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

export default CreateChapter;
