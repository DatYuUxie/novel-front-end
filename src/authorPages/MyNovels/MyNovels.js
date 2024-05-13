import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
<<<<<<< HEAD
import Button from '../../components/Button';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Card, Col, Row, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
>>>>>>> 651d4053e95bb165105cc57cdba228a6e8a65235
import { getBookByUserId } from '../../api/api';
import Button from '../../components/Button';
import './MyNovels.scss';

const { Title } = Typography;

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
    const { user } = useContext(UserContext);

    useEffect(() => {
        getBooksByUserId();
    }, []);
    const getBooksByUserId = async () => {
<<<<<<< HEAD
        let response = await getBookByUserId(user.account.userID);
=======
        let response = await getBookByUserId(userId);
        console.log('response', response.data.DT);
>>>>>>> 651d4053e95bb165105cc57cdba228a6e8a65235
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
                        <span className="author-info">{book.Chapters.length}</span>
                        <div>
                            <Link to={`/author/novel-detail/${book.bookID}`}>
                                <Button className="detail">Xem chi tiết</Button>
                            </Link>
                            <Link to={`/author/edit-novel/${book.bookID}`}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Link>
                        </div>
                    </div>
                </>
            ),
        }));
        setBooks(formattedBooks);
    };
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
