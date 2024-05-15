import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import '../../assets/css/grid.css';
import styles from './NovelItem2.module.scss';
const cx = classNames.bind(styles);

function NovelItem2({ to, isEdit, data }) {
    let responsive = 'l-2 m-3 c-6';
    return (
        <div className={cx('container', responsive)}>
            {isEdit === true && (
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
                        <img src={data.poster} alt="cover-img" className={cx('cover-img')} />
                    </div>
                    <h3 className={cx('name')}>{data.name}</h3>
                    <p className={cx('progress')}>Tiến trình 20/1890</p>
                </div>
            </label>
        </div>
    );
}

export default NovelItem2;
