import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faEdit, faHeart, faPoll, faSpa } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './ForumSidebar.module.scss';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ForumSidebar() {
    const [active, setActive] = useState('Tất cả');
    let activeCss = cx('active');
    const handleclick = (e) => {
        console.log(e.target.innerText);
        setActive(e.target.innerText);
    };
    return (
        <div className={cx('sidebar')}>
            <Button primary2>Tạo bài viết</Button>
            <h3 className={cx('title')}>Tags:</h3>
            <Button
                className={cx('item', active == 'Tất cả' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Tất cả 
            </Button>
            <Button
                className={cx('item', active == 'Hỏi & đáp' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Hỏi & đáp
            </Button>
            <Button
                className={cx('item', active == 'Bàn luận truyện' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faReadme} />}
            >
                Bàn luận truyện
            </Button>
            <Button
                className={cx('item', active == 'Báo cáo lỗi' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faAward} />}
            >
                Báo cáo lỗi
            </Button>
            <Button
                className={cx('item', active == 'Góp ý' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faSpa} />}
            >
                Góp ý
            </Button>
            <Button
                className={cx('item', active == 'Đề cử' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faHeart} />}
            >
                Đề cử
            </Button>
            <Button
                className={cx('item', active == 'Sự kiện' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faSpa} />}
            >
                Sự kiện
            </Button>
        </div>
    );
}

export default ForumSidebar;
