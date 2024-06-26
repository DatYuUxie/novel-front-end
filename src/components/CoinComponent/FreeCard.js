import './Coin.scss';
function FreeCard() {
    return (
        <div>
            <main className="free">
                <svg
                    className="logo"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="10" cy="16" r="9" fill="#E80B26" />
                    <circle cx="22" cy="16" r="9" fill="#F59D31" />
                    <path
                        d="M16 22.7083C17.8413 21.0603 19 18.6655 19 16C19 13.3345 17.8413 10.9397 16 9.29175C14.1587 10.9397 13 13.3345 13 16C13 18.6655 14.1587 21.0603 16 22.7083Z"
                        fill="#FC6020"
                    />
                </svg>
                <svg
                    className="top-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="212"
                    height="172"
                    viewBox="0 0 212 172"
                    fill="none"
                >
                    <g opacity="0.5" filter="url(#filter0_f_13_39661)">
                        <path
                            d="M229.494 -75.1934C282.395 -61.0184 280.29 -27.1947 266.062 25.904C251.834 79.0026 200.862 119.921 147.961 105.746C95.0588 91.5709 93.4904 29.1889 107.718 -23.9097C121.946 -77.0084 176.592 -89.3684 229.494 -75.1934Z"
                            fill="#3250FF"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_13_39661"
                            x="0.0703125"
                            y="-180.627"
                            width="374.644"
                            height="389.208"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_13_39661" />
                        </filter>
                    </defs>
                </svg>
                <svg
                    className="bottom-left"
                    xmlns="http://www.w3.org/2000/svg"
                    width="169"
                    height="172"
                    viewBox="0 0 169 172"
                    fill="none"
                >
                    <g opacity="0.25" filter="url(#filter0_f_13_39662)">
                        <path
                            d="M32.8926 75.7102C74.4101 86.8348 72.7576 113.38 61.5916 155.052C50.4256 196.724 10.4228 228.836 -31.0947 217.712C-72.6122 206.587 -73.8431 157.63 -62.6771 115.958C-51.5111 74.2857 -8.62491 64.5856 32.8926 75.7102Z"
                            fill="#FFF"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_13_39662"
                            x="-168.679"
                            y="-28.5544"
                            width="337.061"
                            height="348.491"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_13_39662" />
                        </filter>
                    </defs>
                </svg>
                <div className="flex">
                    <h5>Free card</h5>
                    <div className="cards">
                        <div className="card-inline">
                            <h3>Bạn đang sử dụng gói miễn phí</h3>
                        </div>

                        <h4>Hãy đăng kí premium để có những </h4>
                        <h4>trải nghiệm tối hơn</h4>
                    </div>
                </div>
                <footer></footer>
            </main>
        </div>
    );
}

export default FreeCard;
