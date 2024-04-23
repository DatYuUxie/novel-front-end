import './MyNovels.scss';

import { Row, Col, Card, Radio, Table, Upload, message, Progress, Avatar, Typography } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '../../components/Button';
import Menu from '../../components/Popper/Menu';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
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
        title: 'Trạng thái',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: 'Lượt xem',
        dataIndex: 'view',
        key: 'view',
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
        view: (
            <>
                <div className="author-info">
                    <span>889990</span>
                </div>
            </>
        ),
        status: (
            <>
                <Button className="detail">Đang ra</Button>
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
                    <div>
                        <Link to={'/author/novel-detail'}>
                            <Button className="detail">Xem chi tiết</Button>
                        </Link>
                        <Link to={'/author/edit-novel'}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                    </div>
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
        view: (
            <>
                <div className="author-info">
                    <span>889990</span>
                </div>
            </>
        ),
        status: (
            <>
                <Button className="detail">Đang ra</Button>
            </>
        ),

        type: (
            <>
                <Button outline className="detail">
                    Ngôn tình
                </Button>
            </>
        ),
        chapter: (
            <>
                <div className="ant-employed">
                    <span>88</span>
                    <div>
                        <Link to={'/author/novel-detail'}>
                            <Button className="detail">Xem chi tiết</Button>
                        </Link>
                        <a href="/author/edit-novel">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </a>
                    </div>
                </div>
            </>
        ),
    },
];
function MyNovels() {
    const navigate = useNavigate();

    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    return (
        <div className="manage-book-tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card
                        bordered={false}
                        className="criclebox tablespace mb-24"
                        title="Quản lí truyện sách"
                        extra={
                            <Button
                                className="new-btn"
                                primary2
                                onClick={() => {
                                    navigate('/author/create-novel');
                                }}
                            >
                                Viết tác phẩm mới
                            </Button>
                        }
                    >
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
