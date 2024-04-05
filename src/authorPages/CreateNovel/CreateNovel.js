import PostItem from '../../components/PostItem';
import SettingSideBar from '../../components/SettingSideBar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateNovelComponent from '../../components/CreateNovelComponent';

import classNames from 'classnames/bind';
import styles from './CreateNovel.module.scss';

const cx = classNames.bind(styles);

function CreateNovel() {
    return (
        <div className={cx('container')}>
                {/* <SettingSideBar tag={2}/> */}
                <div className={cx('content')}>
                    <CreateNovelComponent/>
                </div>
            </div>
    );
}

export default CreateNovel;
