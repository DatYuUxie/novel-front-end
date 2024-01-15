import classNames from 'classnames/bind';
import styles from './NewUpdate.module.scss';

const cx = classNames.bind(styles);

function UpdateItem({data}) {
    return (
        <div className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img
                    src={data.img}
                    alt="cover-img"
                    className={cx('img')}
                />
            </div>
            <div className={cx('content')}>
                <h4 className={cx('name')}>{data.name}</h4>
                <p className={cx('novel-des')}>
                            Có loại người, trong miệng chưa từng nói ra tình cảm, nhưng chôn giấu tình cảm tại đáy lòng,
                            là ngươi nếu như hiểu, liền có thể mỉm cười cả đời chấp nhất.
                        </p>
                <h5 className={cx('type')}>#{data.tag}</h5>
            </div>
        </div>
    );
}

export default UpdateItem;
