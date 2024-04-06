import Button from '../Button';
import styles from './BookContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DraftItem() {
    return (
        <div className={cx('draft')}>
            <h4>Chương 20: Chiến lang vương</h4>
            <div className={cx('action')}>
                <p>6/4/2024</p>

                <Button primary2 className={cx('tag')}>
                    xuất bản
                </Button>
                <Button primary className={cx('tag')}>
                    Xóa
                </Button>
            </div>
        </div>
    );
}

export default DraftItem;
