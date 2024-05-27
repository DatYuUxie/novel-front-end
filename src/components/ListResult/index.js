import classNames from 'classnames/bind';
import styles from './ListResult.module.scss';
import NovelItem from '../NovelItem';

const cx = classNames.bind(styles);

function ListResult({ data }) {
    return (
        <div className={cx('list-result-container')}>
            <div className="grid">
                <div className="row">
                    {data.length > 0 ? (
                        data.map((item, index) => {
                            return <NovelItem data={item} search />;
                        })
                    ) : (
                        <>
                            <div className={cx('cover-novel-img')}>
                                <img src="https://static.vecteezy.com/system/resources/previews/009/007/126/non_2x/document-file-not-found-search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" 
                                alt="cover-img" 
                                className={cx('cover-img')} />
                                <h3>Không có kết quả cho tìm kiếm của bạn.</h3>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListResult;
