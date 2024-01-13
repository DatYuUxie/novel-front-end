import classNames from 'classnames/bind';
import styles from './NovelItem2.module.scss';
import Button from '../Button';
import '../../assets/css/grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function NovelItem2(to, isEdit, img, name, chapter, progress) {
    let responsive = 'l-2 m-3 c-6';
    console.log('is edit:', isEdit);
    return (
        <div className={cx('container', responsive)}>
            {isEdit == true && (
                <>
                    <div className={cx('check-icon')}>
                        <FontAwesomeIcon icon={faCheck} size="4x" />
                    </div>
                    <input type="checkbox" name="platform" value="instagram" id="instagram"></input>
                </>
            )}
            <label className={cx('novel-item-container')} for="instagram">
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
            </label>
        </div>
    );
}

export default NovelItem2;
