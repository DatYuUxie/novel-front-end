import { Avatar, Card, Col, Row, Table, Typography } from 'antd';
import './ManagePayments.scss';
import { getAllPayments } from '../../api/api';
import React, { useEffect, useState } from 'react';
const { Title } = Typography;

// table code start
const columns = [
    {
        title: 'Mã hóa đơn',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Người thực hiện',
        dataIndex: 'user',
        key: 'user',
    },
    {
        title: 'Tên dịch vụ ',
        dataIndex: 'name',
        key: 'name',
    },

    {
        title: 'Số tiền',
        key: 'money',
        dataIndex: 'money',
    },
    {
        title: 'Thời gian giao dịch',
        key: 'time',
        dataIndex: 'time',
    },
    {
        title: 'Trạng thái',
        key: 'status',
        dataIndex: 'status',
    },
];

// const data = [
//     {
//         key: '1',
//         user: (
//             <>
//                 <Avatar.Group>
//                     <Avatar
//                         className="shape-avatar"
//                         shape="square"
//                         size={40}
//                         src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-cute-anime-009.jpg"
//                     ></Avatar>
//                     <div className="avatar-info">
//                         <Title level={5}>Michael John</Title>
//                         <p>user@mail.com</p>
//                     </div>
//                 </Avatar.Group>
//             </>
//         ),

//         name: (
//             <>
//                 <div className="ant-employed">
//                     <span>Đăng kí premium</span>
//                 </div>
//             </>
//         ),

//         id: (
//             <>
//                 <div className="author-info">
//                     <Title level={5}>001</Title>
//                 </div>
//             </>
//         ),

//         money: (
//             <>
//                 <div className="ant-employed">
//                     <span>60000</span>
//                 </div>
//             </>
//         ),
//         time: (
//             <>
//                 <div className="ant-employed">
//                     <span>20:20 20-12-2023 </span>
//                 </div>
//             </>
//         ),
//         status: (
//             <>
//                 <div className="ant-employed">
//                     <span>Đã thanh toán</span>
//                 </div>
//             </>
//         ),
//     },
// ];
function ManagePayments() {
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        getPayments();
    }, []);
    const getPayments = async () => {
        let response = await getAllPayments();
        const formattedPayments = response.data.DT.map((payment, index) => ({
            key: index + 1,
            user: (
                <>
                    <Avatar.Group>
                        <Avatar className="shape-avatar" shape="square" size={40} src={payment.User.avatar}></Avatar>
                        <div className="avatar-info">
                            <Title level={5}>{payment.User.username}</Title>
                            <p>{payment.User.email}</p>
                        </div>
                    </Avatar.Group>
                </>
            ),
            name: (
                <>
                    <div className="ant-employed">
                        <span>{payment.serviceName}</span>
                    </div>
                </>
            ),
            id: (
                <>
                    <div className="author-info">
                        <Title level={5}>{payment.codePayment}</Title>
                    </div>
                </>
            ),
            money: (
                <>
                    <div className="ant-employed">
                        <span>{payment.amount}</span>
                    </div>
                </>
            ),
            time: (
                <>
                    <div className="ant-employed">
                        <span>
                            {new Date(payment.time).toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
                        </span>
                    </div>
                </>
            ),
            status: (
                <>
                    <div className="ant-employed">
                        <span>{payment.status}</span>
                    </div>
                </>
            ),
        }));
        setPayments(formattedPayments);
    };
    return (
        <div className="tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card bordered={false} className="criclebox tablespace mb-24" title="Quản lí thanh toán">
                        <div className="table-responsive">
                            <Table
                                columns={columns}
                                dataSource={payments}
                                pagination={false}
                                className="ant-border-space"
                            />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default ManagePayments;
