import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Card, Col, Row, Table, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Report.scss';

const { Title } = Typography;

// table code start
const columns = [
    {
        title: 'Đối tượng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Loại',
        key: 'type',
        dataIndex: 'type',
    },
    {
        title: 'Nội dung bị báo cáo',
        dataIndex: 'content',
        key: 'content',
        width: '32%',
    },

    {
        title: 'Nguyên nhân báo cáo',
        key: 'report',
        dataIndex: 'report',
    },
];

const data = [
    {
        key: '1',
        content: (
            <>
                <div className="author-info">
                    <p>Chương 2: Bỗng dưng quay đầu</p>
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
                <Button className="detail">Sách</Button>
            </>
        ),
        report: (
            <>
                <div className="ant-employed">
                    <span>Nội dung có xuất hiện những từ không đúng thuần phong</span>
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
                    <p>Chương 1: Tô minh</p>
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA5L-BqlT7_nZ2rdyPwsN2IyvjnHdWxYj0w6xB9ay87meEjqeda_i10fr_VkaRaPzejE&usqp=CAU"
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Ta theo hệ chữa trị trò chơi</Title>
                    </div>
                </Avatar.Group>
            </>
        ),

        type: (
            <>
                <Button className="detail">Sách</Button>
            </>
        ),
        report: (
            <>
                <div className="ant-employed">
                    <span>Spam</span>
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
function Report() {
    return (
        <div className="manage-feedback-tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card bordered={false} className="criclebox tablespace mb-24" title="Báo cáo từ người dùng">
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

export default Report;
