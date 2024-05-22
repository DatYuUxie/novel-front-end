import classNames from 'classnames/bind';
import styles from './ListResult.module.scss';
import NovelItem from '../NovelItem';

const cx = classNames.bind(styles);

function ListResult({ data }) {
    return (
        <div className={cx('list-result-container')}>
            <div className="grid">
                <div className="row">
                    {data.map((item, index) => {
                        return <NovelItem data={item} search />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default ListResult;
