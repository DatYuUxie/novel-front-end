import Banner from "../../components/Banner";
import NovelItem from "../../components/NovelItem";
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
        <Banner/>
        <div className={cx('container')}>
        <NovelItem/>
        <NovelItem/>
        <NovelItem/>
        <NovelItem/>
        </div>
        
        
        

        </>
    );
}

export default Home;