import './ManageUser.scss';

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
        title: 'Tên tài khoản ',
        dataIndex: 'name',
        key: 'name',
        width: '32%',
    },

    {
        title: 'Trạng thái',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: 'Số điện thoại',
        key: 'phone',
        dataIndex: 'phone',
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
                        src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-cute-anime-009.jpg"
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Michael John</Title>
                        <p>michael@mail.com</p>
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

        status: (
            <>
                <Button type="primary" className="tag-primary">
                    ONLINE
                </Button>
            </>
        ),
        phone: (
            <>
                <div className="ant-employed">
                    <span>0123456</span>
                    <a href="#pablo">Chỉnh sửa</a>
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
                        src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-cute-anime-009.jpg"
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Alexa Liras</Title>
                        <p>alexa@mail.com</p>
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

        status: (
            <>
                <Button className="tag-badge">OFFLINE</Button>
            </>
        ),
        phone: (
            <>
                <div className="ant-employed">
                    <span>099888</span>
                    <a href="#pablo">Chỉnh sửa</a>
                </div>
            </>
        ),
    },
];
function ManageUsers() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    return (
        <div className="tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card
                        bordered={false}
                        className="criclebox tablespace mb-24"
                        title="Quản lí người dùng"
                        extra={
                            <>
                                <Radio.Group onChange={onChange} defaultValue="a">
                                    <Radio.Button value="a">All</Radio.Button>
                                    <Radio.Button value="b">ONLINE</Radio.Button>
                                </Radio.Group>
                            </>
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

export default ManageUsers;
