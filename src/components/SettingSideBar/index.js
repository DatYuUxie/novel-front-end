import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styles from './SettingSideBar.module.scss';
import { UserContext } from '../../context/UserContext';

const cx = classNames.bind(styles);

function SettingSideBar({ tag }) {
    const { user } = useContext(UserContext);
    const initValue = (tag) => {
        if (tag === 1) return 'Coin';
        else if (tag === 2) return 'Hồ sơ';
        else return 'Cài đặt';
    };
    const [active, setActive] = useState(initValue(tag));
    let activeCss = cx('active');
    const navigate = useNavigate();

    const handleclick = (e) => {
        if (e.target.innerText === 'Coin') {
            navigate('/account/coin');
        } else if (e.target.innerText === 'Hồ sơ') {
            navigate(`/account/${user.account.userID}`);
        } else if (e.target.innerText === 'Cài đặt') {
            navigate('/account/setting');
        }
        console.log(e.target.innerText);
        setActive(e.target.innerText);
    };
    return (
        <div className={cx('sidebar')}>
            <Button
                className={cx('item', active === 'Coin' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Coin
            </Button>
            <Button
                className={cx('item', active === 'Hồ sơ' && activeCss)}
                onClick={(e) => handleclick(e)}
                rounded
                leftIcon={<FontAwesomeIcon icon={faPoll} />}
            >
                Hồ sơ
            </Button>
            <Button
                className={cx('item', active === 'Cài đặt' && activeCss)}
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
