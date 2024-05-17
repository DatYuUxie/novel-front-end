import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Card, Col, Radio, Row, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getAllUser } from '../../api/api';
import './ManageUser.scss';

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
        title: 'Role',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: 'Giới tính',
        key: 'gender',
        dataIndex: 'gender',
    },
];
function ManageUsers() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        let response = await getAllUser();
        const formattedUsers = response.data.DT.map((user, index) => ({
            key: index + 1,
            name: (
                <>
                    <Avatar.Group>
                        <Avatar
                            className="shape-avatar"
                            shape="square"
                            size={40}
                            src={
                                user.avatar ||
                                'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-cute-anime-009.jpg'
                            }
                        ></Avatar>
                        <div className="avatar-info">
                            <Title level={5}>{user.username}</Title>
                            <p>{user.email}</p>
                        </div>
                    </Avatar.Group>{' '}
                </>
            ),
            id: (
                <>
                    <div className="author-info">
                        <Title level={5}>{user.userID}</Title>
                    </div>
                </>
            ),

            status: (
                <>
                    <Button type="primary" className="tag-primary">
                        {user.role}
                    </Button>
                </>
            ),
            gender: (
                <>
                    <div className="ant-employed">
                        <span>{user.gender||"Chưa xác nhận"}</span>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                </>
            ),
        }));
        setUsers(formattedUsers);
    };

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
                                dataSource={users}
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
