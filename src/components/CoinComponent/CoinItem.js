import { Link } from 'react-router-dom';
import './Coin.scss';
import '../../assets/css/grid.css';
import coin4 from '../../assets/img/coin4.png';
import Button from '../Button';

function CoinItem({data}) {
    return (
        <div className="coin-border-container l-3 m-6 c-12">
            <div className="coin-item-container">
                <div className="cover-coin-item">
                    <div className="cover-coin-img">
                        <img src={data.img} alt="cover-img" className="cover-img" />
                    </div>
                        <h3 className="coin-des">Coin x{data.value}</h3>
                        <Button primary2>{data.price}đ</Button>
                </div>
            </div>
        </div>
    );
}

export default CoinItem;
