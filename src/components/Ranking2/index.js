import classNames from 'classnames/bind';
import styles from './Ranking2.module.scss';
import RankingItem2 from './RankingItem2';

const cx = classNames.bind(styles);

function Ranking2({ data }) {
    // console.log("datatattatata",data)
    return (
        <div className={cx('container')}>
            {data.map((item, index) => {
                return <RankingItem2 data={item} order={index + 1} />;
            })}
        </div>
    );
}

export default Ranking2;
