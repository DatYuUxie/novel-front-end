import classNames from 'classnames/bind';
import styles from './NovelItem2.module.scss';
import Button from '../Button';
import '../../assets/css/grid.css'
const cx = classNames.bind(styles);

function NovelItem2() {
    let responsive = 'l-2 m-3 c-6';
    return (
        <div className={cx('container', responsive)}>
            <div className={cx('novel-item-container')}>
                <div className={cx('cover-novel-item')}>
                    <div className={cx('cover-novel-img')}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                            alt="cover-img"
                            className={cx('cover-img')}
                        />
                    </div>
                        <h3 className={cx('name')}>Shadow Slave</h3>
                        <p className={cx('progress')}>Tiến trình 20/1890</p>
                </div>
            </div>
        </div>
    );
}

export default NovelItem2;
