import classNames from 'classnames/bind';
import styles from './BookContent.module.scss';

const cx = classNames.bind(styles);

function Intro() {
    return (
        <>
            <p className={cx('intro')}>
                Tình, vốn dĩ không nói được.
                <br />
                <br /> Là ai đem tương tư ngàn năm này kéo dài thật dài, từ khi thiên hoang vẫn còn là đại lục, đến khi
                địa lão đã thành một đảo trên đại dương. Một phút ngắm nhìn, kia chính là lần đầu gặp gỡ. <br />
                <br />
                Những ký ức từng quen biết mơ hồ còn đó, nhưng trong ngàn năm phong vân biến chuyển như bụi rơi vào sông
                dài, muốn tìm đã không có dấu vết. <br />
                <br />
                Ngoài khung cửa tay áo tung bay, ánh trăng không đành lòng nhẹ nhàng đi đến, tuổi xuân thổn thức, chia
                ly đã sầu… Vì cái gì càng thêm ưu. <br />
                <br />
                Trong mộng có từng trở lại thu xưa? <br />
                <br />
                Khép mi quay đầu, chôn sâu trong ngực, chuyện cũ mơ hồ, không phân rõ giờ khắc này là mộng, còn là sầu.
                . . <br />
                <br />
                Lưu luyến than nhẹ, khóe mắt rơi lệ, trong nước mắt kia giống như chiếu đến bóng dáng đã từng trên ngọn
                núi cùng gió bay múa, thân ảnh này đứng tại tuế nguyệt bên trong một mực chờ đến dung nhan không còn,
                phảng phất tại giờ khắc này, theo cái kia thở dài, thổ lộ hết nàng lại một lần không nói. <br />
                <br />
                Chỉ thán nếu như là khách qua đường trong sinh mệnh của nhau, vậy thì lòng không còn đau. Thở dài cũng
                chỉ là một cái chớp mắt, không vượt quá ba hơi. Chỉ thán nếu như cuộc đời có thể lặp lại, vậy chi bằng
                không gặp mặt, có lẽ sẽ không biết nhau. <br />
                <br />
                Nếu như chưa từng gặp mặt có lẽ sẽ không nợ nhau, liền có thể như u lan nặc cốc, nhìn thiên hoang địa
                lão, biển cạn đá mòn, lại có thể nhẹ như mây gió, đàn tranh làm bạn, trong đêm ngồi dưới ánh trăng, cười
                nói tự nhiên, trưa ngủ với đôi mắt mông lung, lừa rằng đó là giấc mộng ban ngày, cũng lừa tình cảm chính
                mình. <br />
                <br />
                Tóc dài thơm dịu, tay áo thanh khiết, không hỏi kiếp trước kiếp này kiếp sau, vô dục vô cầu, lòng yên
                tĩnh. . . Sẽ không đau.
                <br /> … <br />
                Thanh âm thì thào chôn trong đáy lòng cô gái, lời nói năm đó không thốt ra được. <br />
                <br />
                “Ta quên thương hải tang điền, quên chúng sinh, quên mất chính mình, nhưng vẫn không thể quên được
                chàng.”
            </p>
        </>
    );
}

export default Intro;
