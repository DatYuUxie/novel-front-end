import CreateNovelComponent from '../../components/CreateNovelComponent';
import classNames from 'classnames/bind';
import styles from './CreateNovel.module.scss';

const cx = classNames.bind(styles);

function CreateNovel() {
    return (
        <div className={cx('container')}>
            {/* <SettingSideBar tag={2}/> */}
            <div className={cx('content')}>
                <CreateNovelComponent />
            </div>
        </div>
    );
}

export default CreateNovel;
