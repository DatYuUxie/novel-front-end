import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faEdit, faHeart, faPoll, faSpa } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './RankingSidebar.module.scss';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function RankingSidebar() {
    const [active, setActive] = useState('Thịnh hành');
    let activeCss = cx('active');
    const handleclick = (e) => {
        console.log(e.target.innerText);
        setActive(e.target.innerText);
    };
    return (
        <div className={cx('sidebar')}>
            <Button
                className={cx('item', active == 'Thịnh hành' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Thịnh hành
            </Button>
            <Button
                className={cx('item', active == 'Đọc nhiều' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faReadme} />}
            >
                Đọc nhiều
            </Button>
            <Button
                className={cx('item', active == 'Tặng thưởng' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faAward} />}
            >
                Tặng thưởng
            </Button>
            <Button
                className={cx('item', active == 'Đề cử' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faSpa} />}
            >
                Đề cử
            </Button>
            <Button
                className={cx('item', active == 'Yêu thích' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faHeart} />}
            >
                Yêu thích
            </Button>
        </div>
    );
}

export default RankingSidebar;
