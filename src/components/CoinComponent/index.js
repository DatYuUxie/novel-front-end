import { useState } from 'react';
import PremiumCard from './PremiumCard';
import PremiumCardActive from './PremiumCardActive';
import FreeCard from './FreeCard';

import Coin from '../../assets/img/coin-svgrepo-com.svg';

import CoinItem from './CoinItem';
import '../../assets/css/grid.css';
import coin5 from '../../assets/img/coin5.png';
import coin4 from '../../assets/img/coin4.png';
import coin3 from '../../assets/img/coin3.png';
import coin2 from '../../assets/img/coin2.png';
import coin1 from '../../assets/img/coin1.png';
import './Coin.scss';

const CoinTable = [
    {
        img: coin1,
        value: 99,
        price: 390000,
    },

    {
        img: coin2,
        value: 300,
        price: 990000,
    },

    {
        img: coin3,
        value: 980,
        price: 2990000,
    },

    {
        img: coin4,
        value: 1990,
        price: 590000,
    },

    {
        img: coin5,
        value: 3590,
        price: 990000,
    },
];

function CoinComponent() {
    const [selectedPlan, setSelectedPlan] = useState('basic');

    const handlePlanChange = (event) => {
        setSelectedPlan(event.target.id);
    };
    return (
        <div>
            <div className="card-inline1">
                <div className="card-inline2">
                    <img crossOrigin="anonymous" className="dib" width="40" height="40" alt="coins" src={coin1} />
                    <p>2000</p>
                </div>
            </div>

            <div className="buy1-container">
                <div className="buy-container">
                    <div className="plans">
                        <div className="title">Gói tài khoản hiện tại của bạn</div>
                        <FreeCard />
                    </div>
                </div>
                <PremiumCard />
            </div>
            <div className="title2">Mua xu</div>
            <div className="buy1-container grid">
                <div className="row">
                    {CoinTable.map((item, index) => {
                        return <CoinItem data={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default CoinComponent;
