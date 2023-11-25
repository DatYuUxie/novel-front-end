import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';
import RankingItem from './RankingItem';

const cx = classNames.bind(styles);

function Ranking() {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Ranking</h2>
            <RankingItem/>
            <RankingItem/>
            <RankingItem/>
            <RankingItem/>
            <RankingItem/>

            
        </div>
    );
}

export default Ranking;
