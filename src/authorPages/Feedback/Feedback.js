import './Feedback.scss';

import { Row, Col, Card, Radio, Table, Upload, message, Progress, Button, Avatar, Typography } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

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
        title: 'Tên truyện',
        dataIndex: 'name',
        key: 'name',
    },
    

    {
        title: 'Loại',
        key: 'type',
        dataIndex: 'type',
    },
    {
        title: 'Nội dung ',
        dataIndex: 'content',
        key: 'content',
        width: '32%',
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
        content: (
            <>
                <div className="author-info">
                <p>Truyện viết hay lắm</p>
                </div>
                
            </>
        ),
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
                    </div>
                </Avatar.Group>
            </>
        ),

        type: (
            <>
                <Button className="detail">Đánh giá</Button>
            </>
        ),
        chapter: (
            <>
                <div className="ant-employed">
                    <span>_</span>
                    <div>
                        <Link to={'/novel-detail'}>
                            <Button className="detail">Xem chi tiết</Button>
                        </Link>
                        <a href="#pablo">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </a>
                    </div>
                </div>
            </>
        ),
    },

    {
        key: '2',
        content: (
            <>
            <div className="author-info">
                <p>Lỗi chính tả</p>
                </div>
                
            </>
        ),
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
                        <Title level={5}>Kiếm lai</Title>
                    </div>
                </Avatar.Group>
            </>
        ),

        type: (
            <>
                <Button className="detail">Lỗi chương</Button>
            </>
        ),
        chapter: (
            <>
                <div className="ant-employed">
                    <span>88</span>
                    <div>
                        <Link to={'/novel-detail'}>
                            <Button className="detail">Xem chi tiết</Button>
                        </Link>
                        <a href="#pablo">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </a>
                    </div>
                </div>
            </>
        ),
    },
];
function Feedback() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    return (
        <div className="manage-feedback-tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card bordered={false} className="criclebox tablespace mb-24" title="Phản hồi từ người dùng">
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

export default Feedback;
