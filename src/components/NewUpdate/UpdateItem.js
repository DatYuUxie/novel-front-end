import classNames from 'classnames/bind';
import styles from './NewUpdate.module.scss';

const cx = classNames.bind(styles);

function UpdateItem(data) {
    console.log("bxhit",data)
    return (
        <div className={cx('container-item')}>
            <div className={cx('cover-img')}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
                    alt="cover-img"
                    className={cx('img')}
                />
            </div>
            <div className={cx('content')}>
                <h4 className={cx('name')}>Goddess of Ice: Corrupting Bleach</h4>

                <h5 className={cx('type')}>fantasty</h5>
            </div>
        </div>
    );
}

export default UpdateItem;
