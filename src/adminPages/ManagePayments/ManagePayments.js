import './ManagePayments.scss';

import { Row, Col, Card, Radio, Table, Upload, message, Progress, Button, Avatar, Typography } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Title } = Typography;

const formProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

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

const data = [
    {
        key: '1',
        user: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={40}
                        src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-cute-anime-009.jpg"
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Michael John</Title>
                        <p>michael@mail.com</p>
                    </div>
                </Avatar.Group>
            </>
        ),

        name: (
            <>
                <div className="ant-employed">
                    <span>Mua đá</span>
                </div>
            </>
        ),

        id: (
            <>
                <div className="author-info">
                    <Title level={5}>002</Title>
                </div>
            </>
        ),

        money: (
            <>
                <div className="ant-employed">
                    <span>0123456</span>
                </div>
            </>
        ),
        time: (
            <>
                <div className="ant-employed">
                    <span>20:20 20-12-2023 </span>
                </div>
            </>
        ),
        status: (
            <>
                <div className="ant-employed">
                    <span>Đã thanh toán</span>
                </div>
            </>
        ),
    },

    {
        key: '2',
        user: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={40}
                        src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-cute-anime-009.jpg"
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Michael John</Title>
                        <p>michael@mail.com</p>
                    </div>
                </Avatar.Group>
            </>
        ),

        name: (
            <>
                <div className="ant-employed">
                    <span>Đăng kí premium</span>
                </div>
            </>
        ),

        id: (
            <>
                <div className="author-info">
                    <Title level={5}>001</Title>
                </div>
            </>
        ),

        money: (
            <>
                <div className="ant-employed">
                    <span>0123456</span>
                </div>
            </>
        ),
        time: (
            <>
                <div className="ant-employed">
                    <span>20:20 20-12-2023 </span>
                </div>
            </>
        ),
        status: (
            <>
                <div className="ant-employed">
                    <span>Đã thanh toán</span>
                </div>
            </>
        ),
    },
];
function ManagePayments() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    return (
        <div className="tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card bordered={false} className="criclebox tablespace mb-24" title="Quản lí thanh toán">
                        <div className="table-responsive">
                            <Table
                                columns={columns}
                                dataSource={data}
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
