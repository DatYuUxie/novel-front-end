import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, small = false }) {
    // const [history, setHistory] = useState([{ data: items }]);
    // const current = history[history.length - 1];

    // console.log("history ban dau",history);
    // console.log("gais tri current",current);

    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={small?cx('small-menu-list'):cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
