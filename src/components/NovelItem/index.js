import classNames from 'classnames/bind';
import styles from './NovelItem.module.scss';
import Button from '../Button';
import '../../assets/css/grid.css';
const cx = classNames.bind(styles);

function NovelItem() {
    let responsive = 'l-3 m-4 c-6';
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
                    <div className={cx('novel-info')}>
                        <h3 className={cx('name')}>Shadow Slave</h3>
                        <p className={cx('novel-des')}>
                            Growing up in poverty, Sunny never expected anything good from life. However, even he did
                            not anticipate being chosen by the Nightmare Spell and becoming However, even he did not
                            anticipate being chosen by the Nightmare Spell and becoming
                        </p>
                        <h5 className={cx('type')}>fantasty</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovelItem;
