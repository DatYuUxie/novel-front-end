import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faEdit, faHeart, faPoll, faSpa } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './SettingSideBar.module.scss';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SettingSideBar({ tag }) {
    const initValue = (tag) => {
        if (tag == 1) return 'Coin';
        else if (tag == 2) return 'Hồ sơ';
        else return 'Cài đặt';
    };
    const [active, setActive] = useState(initValue(tag));
    let activeCss = cx('active');
    const navigate = useNavigate();

    const handleclick = (e) => {
        if (e.target.innerText == 'Coin') {
            navigate('/account/coin');
        } else if (e.target.innerText == 'Hồ sơ') {
            navigate('/account/id');
        } else if (e.target.innerText == 'Cài đặt') {
            navigate('/account/setting');
        }
        console.log(e.target.innerText);
        setActive(e.target.innerText);
    };
    return (
        <div className={cx('sidebar')}>
            <Button
                className={cx('item', active == 'Coin' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Coin
            </Button>
            <Button
                className={cx('item', active == 'Hồ sơ' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Hồ sơ
            </Button>
            <Button
                className={cx('item', active == 'Cài đặt' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faReadme} />}
            >
                Cài đặt
            </Button>
        </div>
    );
}

export default SettingSideBar;
