import ThreadComponent from '../../components/ThreadComponent';
import ForumSidebar from '../../components/ForumSidebar';
import classNames from 'classnames/bind';
import styles from './Thread.module.scss';

const cx = classNames.bind(styles);



function Thread() {
    return ( <>
    <div className={cx('container')}>
                <ForumSidebar/>
                <div className={cx('content')}>
                    <ThreadComponent />
                    
                </div>
            </div></> );
}

export default Thread;