import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Card, Col, Row, Table, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Feedback.scss';

const { Title } = Typography;

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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU"
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
