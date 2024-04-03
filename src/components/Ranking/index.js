import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';
import RankingItem from './RankingItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Ranking({ title, data }) {
    const [rank, setRank] = useState([1, 2, 3, 4, 5]);
    // console.log('dataaaa', data);
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>{title}</h2>
            {data.map((item, index) => {
                return <RankingItem data={item} />;
            })}
        </div>
    );
}

export default Ranking;
