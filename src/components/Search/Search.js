import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (

      <div className={cx('search')}>
          <input placeholder="Tìm kiếm" spellCheck={false} />
          <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
      </div>
     
      );
}

export default Search;