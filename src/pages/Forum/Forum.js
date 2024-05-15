import PostItem from '../../components/PostItem';
import ForumSidebar from '../../components/ForumSidebar';
import classNames from 'classnames/bind';
import styles from './Forum.module.scss';
import { getAllForum } from '../../api/api';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Forum() {
    const [forum, setForum] = useState([]);
    const getForum = async () => {
        const response = await getAllForum();
        setForum(response.data.DT);
    };
    useEffect(() => {
        getForum();
    }, []);
    return (
        <>
            <div className={cx('container')}>
                <ForumSidebar />
                <div className={cx('content')}>
                    {forum.map((item, index) => {
                        return <PostItem data={item} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Forum;
