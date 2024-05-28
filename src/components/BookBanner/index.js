import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { message, Modal } from 'antd';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { getBookById, giveCoupon, voteBook } from '../../api/api';
import '../../assets/css/grid.css';
import coin1 from '../../assets/img/coin1.png';
import { UserContext } from '../../context/UserContext';
import Button from '../Button';
import styles from './BookBanner.module.scss';
import GiftCard from './GiftCard';
import { getCoin } from '../../api/api';

const cx = classNames.bind(styles);

const giftList = [
    {
        img: 'https://cdn3d.iconscout.com/3d/premium/thumb/rose-flower-4843306-4039585.png?f=webp',
        price: 1,
    },
    {
        img: 'https://cdn3d.iconscout.com/3d/premium/thumb/vegetable-paper-bag-6874591-5655173.png',
        price: 5,
    },
    {
        img: 'https://cdn3d.iconscout.com/3d/premium/thumb/fast-food-7493762-6154401.png?f=webp',
        price: 10,
    },
    {
        img: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-cute-cat-3d-rendering-png-image_9205746.png',
        price: 50,
    },
    {
        img: 'https://png.pngtree.com/png-vector/20240101/ourmid/pngtree-3d-cartoon-lion-design-png-image_11398860.png',
        price: 100,
    },
    {
        img: 'https://png.pngtree.com/png-clipart/20230408/ourmid/pngtree-pony-unicorn-cartoon-3d-stereo-cute-model-png-image_6683928.png',
        price: 200,
    },
    {
        img: 'https://static.vecteezy.com/system/resources/thumbnails/029/822/719/small_2x/baby-dragon-transparent-background-png.png',
        price: 500,
    },
    {
        img: 'https://static.vecteezy.com/system/resources/thumbnails/022/534/113/small/mystical-mythical-character-phoenix-phoenix-bird-on-a-transparent-background-phoenix-logo-generative-ai-png.png',
        price: 1000,
    },
];

function BookBanner({ bookID }) {
    const { user } = useContext(UserContext);
    const [book, setBook] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [gift, setGift] = useState(0);
    const [giftIndex, setGiftIndex] = useState(0);
    const [sendGift, setSendGift] = useState({});
    useEffect(() => {
        setSendGift({ gift, bookID: +bookID, userID: user.account.userID });
    }, [gift]);
    const handleSendGift = async () => {
        try {
            console.log('sendGift: ', sendGift);
            let res = await giveCoupon(sendGift);
            if (res && res.data && res.data.EC === 0) {
                message.success('Tặng thưởng thành công');
            } else {
                message.error(res.data.EM);
            }
        } catch (error) {
            message.error('Tặng thưởng không thành công');
            console.log(error);
        }
    };
    const [coin, setCoin] = useState(0);
    const getCoinUser = async () => {
        try {
            const res = await getCoin(user.account.userID);
            if (res && res.data && res.data.DT) {
                setCoin(res.data.DT);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCoinUser();
    }, []);
    const handleVote = async () => {
        try {
            let res = await voteBook(bookID);
            console.log('vote: ', res);
            if (res && res.data && res.data.EC === 0) {
                message.success('Bình chọn thành công');
            }
        } catch (error) {
            message.error('Bình chọn không thành công');
            console.log(error);
        }
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        handleSendGift();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleGiftClick = (coin, index) => {
        setGift(coin);
        setGiftIndex(index);
    };
    // Catch Rating value
    const bookByID = async () => {
        try {
            const res = await getBookById(bookID);
            if (res && res.data && res.data.DT) {
                return res.data.DT;
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchNovels = async () => {
            const novels = await bookByID();
            setBook(novels);
        };
        fetchNovels();
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('group')}>
                <h1>Tags</h1>
                <div className={cx('group-tag')}>
                    <Button rounded tag className={cx('tag')}>
                        # {book.tag}
                    </Button>
                </div>
            </div>
            <div className={cx('group')}>
                <h1>Điểm xếp hạng tuần </h1>
                <div className={cx('group-tag-2')}>
                    <div className={cx('group-item')}>
                        <div className={cx('item')}>
                            <div className={cx('cover-img')}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEX////1Mmb2MWX2N231MWX1MWX/////wtL8nbf+9vj+vM38mLS/meY4AAAABXRSTlMB5qYc7ekm068AAABrSURBVDjLYyADMCuGYgAhA6CESSgW4AyUUMUmEQSUEMUmEQiUCMUKqC8xLQ0JZCJJpKEAKkoQtBwD0FlieTkUVKFJlMMBbSQwLR8sQbKjAwi6sUh0gAHtJBCW09vnODMnzuyMswDAXWSQDgDUBFQyX50DMwAAAABJRU5ErkJggg=="
                                    alt="img"
                                    className={cx('img')}
                                />
                            </div>
                            <h1>NO.16</h1>
                            <p>BXH đọc</p>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('cover-img')}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEX////1Mmb2MWX2N231MWX1MWX/////wtL8nbf+9vj+vM38mLS/meY4AAAABXRSTlMB5qYc7ekm068AAABrSURBVDjLYyADMCuGYgAhA6CESSgW4AyUUMUmEQSUEMUmEQiUCMUKqC8xLQ0JZCJJpKEAKkoQtBwD0FlieTkUVKFJlMMBbSQwLR8sQbKjAwi6sUh0gAHtJBCW09vnODMnzuyMswDAXWSQDgDUBFQyX50DMwAAAABJRU5ErkJggg=="
                                    alt="img"
                                    className={cx('img')}
                                />
                            </div>
                            <h1>NO.6</h1>
                            <p>BXH Phiếu thưởng</p>
                        </div>
                    </div>
                    <div className={cx('button')}>
                        <Button primary2 tag leftIcon={<FontAwesomeIcon icon={faPlusSquare} />} onClick={handleVote}>
                            Bình chọn
                        </Button>
                        <Button primary2 tag leftIcon={<FontAwesomeIcon icon={faPlusSquare} />} onClick={showModal}>
                            Tặng thưởng
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                title="Tặng thưởng"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={600}
                footer={[
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            fontWeight: 600,
                            fontSize: '16px',
                        }}
                    >
                        <Button large rounded primary2 onClick={handleOk}>
                            Tặng thưởng
                        </Button>
                    </div>,
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            fontWeight: 600,
                            fontSize: '16px',
                        }}
                    >
                        Coin của bạn: {coin}
                        <img crossOrigin="anonymous" className="dib" width="40" height="40" alt="coins" src={coin1} />
                    </div>,
                ]}
            >
                <div className="grid">
                    <div className="row">
                        {giftList.map((item, index) => {
                            return (
                                <GiftCard
                                    index={index}
                                    data={item}
                                    handleClick={handleGiftClick}
                                    isActive={giftIndex === index}
                                />
                            );
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default BookBanner;
