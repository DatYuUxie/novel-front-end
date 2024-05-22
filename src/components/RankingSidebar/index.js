import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faEdit, faHeart, faPoll, faSpa } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './RankingSidebar.module.scss';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function RankingSidebar({ onTagChange }) {
    const [tags, setTags] = useState([
        { name: 'Thịnh hành', icon: <FontAwesomeIcon icon={faPoll} /> },
        { name: 'Đọc nhiều', icon: <FontAwesomeIcon icon={faReadme} /> },
        { name: 'Tặng thưởng', icon: <FontAwesomeIcon icon={faAward} /> },
        { name: 'Đề cử', icon: <FontAwesomeIcon icon={faSpa} /> },
        { name: 'Yêu thích', icon: <FontAwesomeIcon icon={faHeart} /> },
    ]);
    const [active, setActive] = useState('Thịnh hành');
    let activeCss = cx('active');
    const handleclick = (e) => {
        setActive(e.target.innerText);
        onTagChange(e.target.innerText);
    };

    return (
        <div className={cx('sidebar')}>
            {tags.map((item, index) => (
                <Button
                    className={cx('item', active == item.name && activeCss)}
                    onClick={(e) => handleclick(e)}
                    rounded
                    leftIcon={item.icon}
                >
                    {item.name}
                </Button>
            ))}
        </div>
    );
}

export default RankingSidebar;
