import { useContext } from 'react';
import { payment } from '../../api/api';
import '../../assets/css/grid.css';
import { UserContext } from '../../context/UserContext';
import Button from '../Button';
import './Coin.scss';

function CoinItem({ data }) {
    const { user } = useContext(UserContext);
    const handleBuy = async (data) => {
        try {
            let amount = data.price;
            let description = `${user.account.userID} Coin`;
            let res = await payment({ amount, description });
            console.log('res', res);
            if (res && res.status === 200) {
                window.open(res.data.checkoutUrl, '_blank');
            }
        } catch (error) {
            console.log('Thanh toán thất bại');
        }
    };
    return (
        <div className="coin-border-container l-3 m-6 c-12">
            <div className="coin-item-container">
                <div className="cover-coin-item">
                    <div className="cover-coin-img">
                        <img src={data.img} alt="cover-img" className="cover-img" />
                    </div>
                    <h3 className="coin-des">Coin x{data.value}</h3>
                    <Button primary2 onClick={() => handleBuy(data)}>
                        {data.price}đ
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CoinItem;
