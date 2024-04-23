import { useState } from 'react';
import PremiumCard from './PremiumCard';
import CoinItem from './CoinItem';
import '../../assets/css/grid.css';
import coin5 from '../../assets/img/coin5.png';
import coin4 from '../../assets/img/coin4.png';
import coin3 from '../../assets/img/coin3.png';
import coin2 from '../../assets/img/coin2.png';
import coin1 from '../../assets/img/coin1.png';

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
            <div className="buy1-container">
                <div className="buy-container">
                    <div className="plans">
                        <div className="title">Chọn phương thức thanh toán</div>
                        <label
                            className={`plan basic-plan ${selectedPlan === 'basic' ? 'selected' : ''}`}
                            htmlFor="basic"
                        >
                            <input
                                type="radio"
                                name="plan"
                                id="basic"
                                checked={selectedPlan === 'basic'}
                                onChange={handlePlanChange}
                            />
                            <div className="plan-content">
                                <img
                                    loading="lazy"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULr3Ust3Yw-IS1KvGuHQFys81W1ava9Ohd8gduuRPXA&s"
                                    alt=""
                                />
                                <div className="plan-details">
                                    <span>VNpay</span>
                                    <p>Thanh toán bằng tài khoản VNpay.</p>
                                </div>
                            </div>
                        </label>

                        <label
                            className={`plan complete-plan ${selectedPlan === 'complete' ? 'selected' : ''}`}
                            htmlFor="complete"
                        >
                            <input
                                type="radio"
                                name="plan"
                                id="complete"
                                checked={selectedPlan === 'complete'}
                                onChange={handlePlanChange}
                            />
                            <div className="plan-content">
                                <img
                                    loading="lazy"
                                    src="https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg"
                                    alt=""
                                />
                                <div className="plan-details">
                                    <span>Momo</span>
                                    <p>Thanh toán bằng tài khoản momo.</p>
                                </div>
                            </div>
                        </label>
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
