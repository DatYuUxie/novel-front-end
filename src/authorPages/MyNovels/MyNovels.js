import './MyNovels.scss';

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
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Thông tin sách ',
        dataIndex: 'name',
        key: 'name',
        width: '32%',
    },

    {
        title: 'Thể loại',
        key: 'type',
        dataIndex: 'type',
    },
    {
        title: 'Số chương',
        key: 'chapter',
        dataIndex: 'chapter',
    },
];

const data = [
    {
        key: '1',
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={40}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPa559GHFA8zlQYixUpRG5eTx0XNfXcm1bISubnXfW4_nBzsStFPnA7RXVLHpEDEio9c&usqp=CAU"
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Cầu ma</Title>
                        <p>Nhĩ Căn</p>
                    </div>
                </Avatar.Group>{' '}
            </>
        ),
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>001</Title>
                </div>
            </>
        ),

        type: (
            <>
                <Button className="detail">Tiên hiệp</Button>
            </>
        ),
        chapter: (
            <>
                <div className="ant-employed">
                    <span>456</span>
                    <Link to={'/novel-detail'}>
                        <Button className="detail">Xem chi tiết</Button>
                        <a href="#pablo">Edit</a>
                    </Link>
                </div>
            </>
        ),
    },

    {
        key: '2',
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={40}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPa559GHFA8zlQYixUpRG5eTx0XNfXcm1bISubnXfW4_nBzsStFPnA7RXVLHpEDEio9c&usqp=CAU"
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Cổ chân nhân</Title>
                        <p>Quang Khải</p>
                    </div>
                </Avatar.Group>{' '}
            </>
        ),
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>002</Title>
                </div>
            </>
        ),

        type: (
            <>
                <Button className="detail">Ngôn tình</Button>
            </>
        ),
        chapter: (
            <>
                <div className="ant-employed">
                    <span>88</span>
                    <Link to={'/novel-detail'}>
                        <Button className="detail">Xem chi tiết</Button>
                        <a href="#pablo">Edit</a>
                    </Link>
                </div>
            </>
        ),
    },
];
function MyNovels() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    return (
        <div className="manage-book-tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card bordered={false} className="criclebox tablespace mb-24" title="Quản lí truyện sách">
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

export default MyNovels;
