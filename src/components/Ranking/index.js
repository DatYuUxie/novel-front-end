import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';
import RankingItem from './RankingItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Ranking() {
    const[rank, setRank]=useState([1,2,3,4,5]);
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Bảng xếp hạng</h2>
            {rank.map((item, index) => {
               return <RankingItem data={item}/>
            })}


            
        </div>
    );
}

export default Ranking;
