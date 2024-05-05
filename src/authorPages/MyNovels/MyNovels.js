import './MyNovels.scss';
import { Row, Col, Card, Table, message, Avatar, Typography } from 'antd';
import 'tippy.js/dist/tippy.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import { getBookByUserId } from '../../api/api';
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
function MyNovels() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooksByUserId();
    }, []);
    const getBooksByUserId = async () => {
        let response = await getBookByUserId(userId);
        const formattedBooks = response.data.DT.map((book, index) => ({
            key: index + 1,
            name: (
                <>
                    <Avatar.Group>
                        <Avatar className="shape-avatar" shape="square" size={40} src={book.poster}></Avatar>
                        <div className="avatar-info">
                            <Title level={5}>{book.bookName}</Title>
                            <p>{book.author}</p>
                        </div>
                    </Avatar.Group>{' '}
                </>
            ),
            view: (
                <>
                    <div className="author-info">
                        <span>{book.view}</span>
                    </div>
                </>
            ),
            status: (
                <>
                    <Button className="detail">
                        {/* thêm trạng thái */}
                        {/* {book.tag} */}
                        Đang ra
                    </Button>
                </>
            ),

            type: (
                <>
                    <Button className="detail">{book.tag}</Button>
                </>
            ),
            chapter: (
                <>
                    <div className="ant-employed">
                        {/* đang bị sai số chương */}
                        <span className="author-info">{book.vote}</span>
                        <div>
                            <Link to={`/author/novel-detail/${book.bookID}`}>
                                <Button className="detail">Xem chi tiết</Button>
                            </Link>
                            <Link to={'/author/edit-novel'}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Link>
                        </div>
                    </div>
                </>
            ),
        }));
        setBooks(formattedBooks);
    };
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
                                dataSource={books}
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
