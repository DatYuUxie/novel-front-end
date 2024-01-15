import Banner from '../../components/Banner';
import NovelItem from '../../components/NovelItem';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Ranking from '../../components/Ranking';
import Button from '../../components/Button';

import '../../assets/css/grid.css';
import NewUpdate from '../../components/NewUpdate';
import { useEffect, useState } from 'react';
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

const rank1 = [
    {
        img: 'https://th.bing.com/th?id=OIF.%2fkwTnvwmi6hew0Kql6O1DQ&rs=1&pid=ImgDetMain',
        name: 'Ta Tại Quỷ Dị Thế Giới Cẩn Thận Tu Tiên',
        rank: '1',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg',
        name: 'Cổ chân nhân',
        rank: '2',
        tag: 'Ngôn tình',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU',
        name: 'Cầu ma',
        rank: '3',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU',
        name: 'Nhất niệm vĩnh hằng',
        rank: '4',
        tag: 'Huyền huyễn',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLvzrKESPLTFFmRyjoQtPpGpKdsMoCKZTAyeFZvnPjD0TyAPjXXtY-l9WuZw0QCxVjwQ&usqp=CAU',
        name: 'Linh cảnh hành giả',
        rank: '5',
        tag: 'Khoa học',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
];

const rank2 = [
    {
        img: 'https://th.bing.com/th?id=OIF.%2fkwTnvwmi6hew0Kql6O1DQ&rs=1&pid=ImgDetMain',
        name: 'Ta Tại Quỷ Dị Thế Giới Cẩn Thận Tu Tiên',
        rank: '1',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg',
        name: 'Cổ chân nhân',
        rank: '2',
        tag: 'Ngôn tình',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK4QteMlYJ4p_AQoqS6KXh_UcisUWNZ0pefn4lXHFfoyxR9tSiojpn13flHdebZqLREM&usqp=CAU',
        name: 'Tiên nghịch',
        rank: '3',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA5L-BqlT7_nZ2rdyPwsN2IyvjnHdWxYj0w6xB9ay87meEjqeda_i10fr_VkaRaPzejE&usqp=CAU',
        name: 'Ta theo hệ chữa trị trò chơi',
        rank: '4',
        tag: 'Võng du',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWfMeHk1patn69dUQ4N5nNvpjAUedCczWkkhAvQpARX6IyKkr9U5ZJAzM-PabEnbg7M&usqp=CAU',
        name: 'Đạo quỷ dị tiên',
        rank: '5',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
];

const rank3 = [
    {
        img: 'https://th.bing.com/th?id=OIF.%2fkwTnvwmi6hew0Kql6O1DQ&rs=1&pid=ImgDetMain',
        name: 'Ta Tại Quỷ Dị Thế Giới Cẩn Thận Tu Tiên',
        rank: '1',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU',
        name: 'Cầu ma',
        rank: '2',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU',
        name: 'Nhất niệm vĩnh hằng',
        rank: '3',
        tag: 'Huyền huyễn',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK4QteMlYJ4p_AQoqS6KXh_UcisUWNZ0pefn4lXHFfoyxR9tSiojpn13flHdebZqLREM&usqp=CAU',
        name: 'Tiên nghịch',
        rank: '4',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWfMeHk1patn69dUQ4N5nNvpjAUedCczWkkhAvQpARX6IyKkr9U5ZJAzM-PabEnbg7M&usqp=CAU',
        name: 'Đạo quỷ dị tiên',
        rank: '5',
        tag: 'Tiên hiệp',
        des: 'Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.',
    },
];

function Home() {
    const [mine, setMine] = useState(Novels);
    // let rank1, rank2, rank3;
    // useEffect(() => {
    //     setMine(Novels);
    // },[]);
    console.log('helloooo', mine);
    return (
        <>
            <div className={cx('top')}>
                <Banner />
                <NewUpdate />
            </div>

            <div className={cx('container')}>
                <h2 className={cx('title')}>Tiếp tục xem</h2>

                <div className={cx('continued')}>
                    {mine.map((item, index) => {
                        return <NovelItem data={item} />;
                    })}
                </div>
            </div>
            <div className={cx('ranking-container')}>
                <Ranking title="Top thịnh hành" data={rank1} />
                <Ranking title="Top đọc nhiều" data={rank2} />
                <Ranking title="Top đề cử" data={rank3} />
            </div>

            <div className={cx('propose')}>
                <h2>Đề cử cho bạn</h2>
                <div className={cx('tags')}>
                    <Button text tag>
                        Tất cả
                    </Button>
                    <Button text tag>
                        Huyền huyễn
                    </Button>
                    <Button text tag>
                        Ngôn tình
                    </Button>
                    <Button text tag>
                        Khoa học
                    </Button>
                    <Button text tag>
                        Đô thị
                    </Button>
                    <Button text tag>
                        Huyền huyễn
                    </Button>
                    <Button text tag>
                        Ngôn tình
                    </Button>
                    <Button text tag>
                        Khoa học
                    </Button>
                    <Button text tag>
                        Đô thị
                    </Button>
                </div>
                <div className={cx('content')}>
                    <div className="grid">
                        <div className="row">
                            {mine.map((item, index) => {
                                return <NovelItem data={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
