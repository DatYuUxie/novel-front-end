import PostItem from '../../components/PostItem';
import ForumSidebar from '../../components/ForumSidebar';
import classNames from 'classnames/bind';
import styles from './Forum.module.scss';
import { getAllForum } from '../../api/api';
import { useCallback, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Forum() {
    const [forum, setForum] = useState([]);
    const [forumSorted, setForumSorted] = useState([]);

    const getForum = async () => {
        const response = await getAllForum();
        setForum(response.data.DT);
        setForumSorted(response.data.DT);
    };
    useEffect(() => {
        getForum();
    }, []);
    const handleTagChange = useCallback(
        (selectedTags) => {
            if (selectedTags === 'Tất cả') {
                setForumSorted(forum);
            } else {
                let result = forum.filter((item) => item.tag === selectedTags);
                setForumSorted(result);
            }
        },
        [forumSorted],
    );
    return (
        <>
            <div className={cx('container')}>
                <ForumSidebar onTagChange={handleTagChange}/>
                <div className={cx('content')}>
                    {forumSorted.map((item, index) => {
                        return <PostItem data={item} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Forum;
