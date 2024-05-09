import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommenting, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import Comments from '../BookContent/Comments';
import { Reply } from '../../assets/icon';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ThreadComponent.module.scss';

const cx = classNames.bind(styles);

function ThreadComponent() {
    return (
        <div className={cx('container')}>
            <div className={cx('writer')}>
                <Link
                    className={cx('icon')}
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    <Reply />
                </Link>
                <div className={cx('cover-img')}>
                    <img
                        src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg"
                        alt="cover-img"
                        className={cx('img')}
                    />
                </div>
                <h3>Bui Quang Khai</h3>
                <p className={cx('time')}>15/03/2024</p>
            </div>
            <h1 className={cx('title')}>Xich Tam thuan Tien - chuong 1111</h1>
            <p className={cx('content')}>
                Đây là một dãy núi lớn liên miên không dứt, như một con rồng còn sống kéo dài cả vùng đất mênh mông này,
                ở đấy có cỏ cây rậm rạp, còn có tiếng chim thú không ngừng vang lên. Xa xa nhìn lại, có thể thấy trên
                núi có một phần giống như được năm ngọn núi hợp lại, trông như năm ngón tay người giơ lên trời cao.
                <br />
                <br />
                Trong đó có một ngọn núi trung đoạn(1) , một người thiếu niên đang tựa vào một khối đá lớn hơi bị lõm
                sâu vào để tránh nắng. Bên cạnh hắn có một cái sọt mây, trong đó có dựng một chút dược thảo, mùi thuốc
                tản phát ra lượn lờ khắp bốn phía.
                <br />
                <br />
                Thiếu niên này mi thanh mục tú, nhưng thân thể lại hơi ốm yếu, thoạt nhìn có chút suy nhược. Hắn mặc một
                cái áo được làm bằng da thú, cổ đeo một vòng thú cốt màu trắng hình trăng lưỡi liềm, đầu tóc rối bù được
                hắn dùng một sợi dây cây buộc lại. Hắn ngồi ở chỗ đó, tay cầm một quyển sách da do mười tấm da thú dính
                lại, chăm chú đọc lấy.
            </p>
            <div className={cx('action')}>
                <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                <FontAwesomeIcon icon={faCommenting} className={cx('icon')} />
            </div>
            <Comments />
        </div>
    );
}

export default ThreadComponent;
