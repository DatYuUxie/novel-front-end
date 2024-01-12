import classNames from 'classnames/bind';
import styles from './Ranking2.module.scss';
import RankingItem2 from './RankingItem2';

const cx = classNames.bind(styles);

function Ranking2() {
    return (
        <div className={cx('container')}>
            <RankingItem2/>
            <RankingItem2/>
            <RankingItem2/>
            <RankingItem2/>
            <RankingItem2/>

            
        </div>
    );
}

export default Ranking2;
