import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Library.module.scss';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import NovelItem2 from '../../components/NovelItem2';
import '../../assets/css/grid.css';
const cx = classNames.bind(styles);

const Novels = [
    {
        img: 'https://th.bing.com/th/id/OIP.zN663rR_dA-lOsaRzzr2KQHaJ4?rs=1&pid=ImgDetMain',
        name: 'Xích tâm thuẫn thiên',
        rank: '1',
        tag: 'Ngôn tình',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://th.bing.com/th?id=OIF.%2fkwTnvwmi6hew0Kql6O1DQ&rs=1&pid=ImgDetMain',
        name: 'Ta Tại Quỷ Dị Thế Giới Cẩn Thận Tu Tiên',
        rank: '2',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg',
        name: 'Cổ chân nhân',
        rank: '3',
        tag: 'Ngôn tình',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU',
        name: 'Cầu ma',
        rank: '4',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU',
        name: 'Nhất niệm vĩnh hằng',
        rank: '5',
        tag: 'Huyền huyễn',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLvzrKESPLTFFmRyjoQtPpGpKdsMoCKZTAyeFZvnPjD0TyAPjXXtY-l9WuZw0QCxVjwQ&usqp=CAU',
        name: 'Linh cảnh hành giả',
        rank: '6',
        tag: 'Khoa học',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaVv_y8GMZrPyp7YWd4Ok0_1wHqZQ5VriE_oV95lpbiEFEArQvnXwxj68bPLIzk9E88U&usqp=CAU',
        name: 'Quang âm chi ngoại',
        rank: '7',
        tag: 'Kì ảo',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMU8lXXJbMIH8aq_j-thnEk6R9_NrShoVmS66vfbY3tjkOxIBU_PGGXJmnWb7NCUHDxws&usqp=CAU',
        name: 'Thâm hải dư tẫng',
        rank: '8',
        tag: 'Võng du',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceqgWo6ICouOeVAbyzrrCbXeakRp4YQm6Z5IsOTh1x-19kS83BB9AbFX3HfJzrYasHsg&usqp=CAU',
        name: 'Túc mệnh chi hoàn',
        rank: '9',
        tag: 'Lịch sử',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK4QteMlYJ4p_AQoqS6KXh_UcisUWNZ0pefn4lXHFfoyxR9tSiojpn13flHdebZqLREM&usqp=CAU',
        name: 'Tiên nghịch',
        rank: '10',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA5L-BqlT7_nZ2rdyPwsN2IyvjnHdWxYj0w6xB9ay87meEjqeda_i10fr_VkaRaPzejE&usqp=CAU',
        name: 'Ta theo hệ chữa trị trò chơi',
        rank: '11',
        tag: 'Võng du',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKUoKKD67-iFRgreaWoD8DztjHW7AMSggydwg_jTW6lue8oLxCnf0yTbBO0OV86PiTbw&usqp=CAU',
        name: 'Ta có một tòa kinh khủng phòng',
        rank: '12',
        tag: 'Khoa học',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWfMeHk1patn69dUQ4N5nNvpjAUedCczWkkhAvQpARX6IyKkr9U5ZJAzM-PabEnbg7M&usqp=CAU',
        name: 'Đạo quỷ dị tiên',
        rank: '13',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4gHK3BVUCsMqTD5U4bHG9yPOfnzc2u8QvdEf3OQcoe83zLdAm_ptJJ144Q17x7uqQ-Q&usqp=CAU',
        name: 'Long thần truyền thuyết',
        rank: '14',
        tag: 'Huyền huyễn',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV67EK9ke4CyxwmnykdYHBrbKG-iDHqufFiOjJC_CwDhUrqGBBHOCLQkv-7W99Io_eIqI&usqp=CAU',
        name: 'Thâm không bỉ ngạn',
        rank: '15',
        tag: 'Ngôn tình',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
];

function Library() {
    const [tab, setTab] = useState(0);
    const [editClick, setEditClick] = useState(true);

    const active = cx('active');
    const hidden = cx('hidden');
    const toggleClick = () => {
        let temp = editClick;
        setEditClick(!temp);
    };
    return (
        <div>
            <div className={cx('head')}>
                <h1>Kệ sách</h1>
                <div className={cx('tabs-parent')}>
                    <div className={cx('tabs')}>
                        <div className={cx('tab-item', tab == 0 && active)} onClick={() => setTab(0)}>
                            Kệ sách
                        </div>
                        <div className={cx('tab-item', tab == 1 && active)} onClick={() => setTab(1)}>
                            Lịch sử
                        </div>
                    </div>
                    <div className={cx(editClick == true && hidden)}>
                        <Button className={cx('remove')} leftIcon={<FontAwesomeIcon icon={faTrashAlt} />}>
                            Xóa
                        </Button>
                        <Button className={cx('cancel')} onClick={toggleClick}>
                            Hủy
                        </Button>
                    </div>

                    <Button
                        className={cx('edit', editClick == false && hidden)}
                        onClick={toggleClick}
                        leftIcon={<FontAwesomeIcon icon={faEdit} />}
                    >
                        Chỉnh sửa
                    </Button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className="grid">
                    <div className="row">
                        {Novels.map((item, index) => {
                            return <NovelItem2 data={item} isEdit={!editClick} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Library;
