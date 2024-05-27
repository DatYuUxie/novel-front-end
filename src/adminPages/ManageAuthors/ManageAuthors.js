import './ManageAuthors.scss';
import { Avatar, Button, Card, Col, Radio, Row, Table, Typography } from 'antd';
const { Title } = Typography;

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
                    <a href="#pablo">Edit</a>
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
                    <a href="#pablo">Edit</a>
                </div>
            </>
        ),
    },
];
function ManageAuthors() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    return (
        <div className="tabled">
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <Card
                        bordered={false}
                        className="criclebox tablespace mb-24"
                        title="Quản lí tác giả"
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

export default ManageAuthors;
