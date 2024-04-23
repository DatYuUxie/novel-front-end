import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faEdit, faHeart, faPoll, faSpa } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchSidebar.module.scss';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SearchSidebar({ onTagChange }) {
    const [tags, setTags] = useState([
        'Tất cả',
        'Tiên hiệp',
        'Huyền huyễn',
        'Ngôn tình',
        'Trinh thám',
        'Khoa học',
        'Đô thị',
        'Võng du',
    ]);
    const [active, setActive] = useState('Tất cả');
    let activeCss = cx('active');
    const handleclick = (e) => {
        setActive(e.target.innerText);
        onTagChange(e.target.innerText);
    };
    return (
        <div className={cx('sidebar')}>
            <h3 className={cx('title')}>Thể loại:</h3>
            {tags.map((item, index) => (
                <Button className={cx('item', active == item && activeCss)} onClick={(e) => handleclick(e)} rounded>
                    {item}
                </Button>
            ))}
        </div>
    );
}

export default SearchSidebar;
