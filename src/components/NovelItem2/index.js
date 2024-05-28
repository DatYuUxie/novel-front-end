import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import '../../assets/css/grid.css';
import styles from './NovelItem2.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

function NovelItem2({ to, isEdit, data, handleSelectId }) {
    let responsive = 'l-2 m-3 c-6';
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            handleSelectId(data.bookID, true);
        } else {
            handleSelectId(data.bookID, false);
        }
    };
    return (
        <div className={cx('container', responsive)}>
            {isEdit === true && (
                <>
                    <div className={isChecked ? cx('check-icon2') : cx('check-icon')}>
                        <FontAwesomeIcon icon={faCheck} size="4x" />
                    </div>
                    <input
                        type="checkbox"
                        name="platform"
                        value="instagram"
                        id="instagram"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    ></input>
                </>
            )}
            <label className={cx('novel-item-container')} for="instagram">
                <div className={cx('cover-novel-item')}>
                    <div className={cx('cover-novel-img')}>
                        <img src={data.poster} alt="cover-img" className={cx('cover-img')} />
                    </div>
                    <Link to={`/book/${data.bookID}`}>
                        <h3 className={cx('name')}>{data.name}</h3>
                    </Link>
                    <p className={cx('progress')}>Tiến trình 1/30</p>
                </div>
            </label>
        </div>
    );
}

export default NovelItem2;
