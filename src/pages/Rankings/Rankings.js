import RankingSidebar from "../../components/RankingSidebar";
import Ranking2 from "../../components/Ranking2";
import classNames from 'classnames/bind';
import styles from './Rankings.module.scss';

const cx = classNames.bind(styles);
function Rankings() {
    return ( 

        <div className={cx('container')}>
            <RankingSidebar/>
            <div className={cx('content')}>
            <Ranking2/>

            </div>
        </div>
     );
}

export default Rankings;