import classNames from 'classnames/bind';
import Button from '../../Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, small = false }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            className={small ? cx('small-menu-item') : classes}
            leftIcon={data.icon}
            to={data.to}
            onClick={data.onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
