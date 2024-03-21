import PostItem from '../../components/PostItem';
import ForumSidebar from '../../components/ForumSidebar';
import classNames from 'classnames/bind';
import styles from './Forum.module.scss';

const cx = classNames.bind(styles);

function Forum() {
    return (
        <>
            <div className={cx('container')}>
                <ForumSidebar/>
                <div className={cx('content')}>
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </div>
            </div>
        </>
    );
}

export default Forum;
