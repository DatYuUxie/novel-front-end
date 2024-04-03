import { Link } from 'react-router-dom';
import config from '../../config';

import classNames from 'classnames/bind';
import styles from './NovelItem.module.scss';
import Button from '../Button';
import '../../assets/css/grid.css';
const cx = classNames.bind(styles);

function NovelItem({ data }) {
    let responsive = 'l-3 m-4 c-6';
    return (
        <div className={cx('container', responsive)}>
            <Link to={`/book/${data.bookID}`} className={cx('novel-item-container')}>
                <div className={cx('cover-novel-item')}>
                    <div className={cx('cover-novel-img')}>
                        <img src={data.poster} alt="cover-img" className={cx('cover-img')} />
                    </div>
                    <div className={cx('novel-info')}>
                        <h3 className={cx('name')}>{data.bookName}</h3>
                        <p className={cx('novel-des')}>{data.desciption}</p>
                        <h5 className={cx('type')}>#{data.tag}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NovelItem;
