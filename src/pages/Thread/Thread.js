import classNames from 'classnames/bind';
import ForumSidebar from '../../components/ForumSidebar';
import ThreadComponent from '../../components/ThreadComponent';
import styles from './Thread.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getForumByForumId } from '../../api/api';

const cx = classNames.bind(styles);

function Thread() {
    const [forum, setForum] = useState({});
    const { threadId } = useParams();
    const fetchForum = async () => {
        try {
            const res = await getForumByForumId(threadId);
            setForum(res.data.DT);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchForum();
    }, []);
    return (
        <>
            <div className={cx('container')}>
                <ForumSidebar />
                <div className={cx('content')}>
                    <ThreadComponent data={forum} />
                </div>
            </div>
        </>
    );
}

export default Thread;
