import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Card, Col, Row, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getAllBooks } from '../../api/api';
import './ManageBooks.scss';

const { Title } = Typography;

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
function ManageBooks() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks();
    }, []);
    const getBooks = async () => {
        let response = await getAllBooks();
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
                    </Avatar.Group>
                </>
            ),
            id: (
                <>
                    <div className="author-info">
                        <Title level={5}>{book.bookID}</Title>
                    </div>
                </>
            ),
            type: (
                <>
                    <Button className="tag-badge">{book.tag}</Button>
                </>
            ),
            chapter: (
                <>
                    <div className="ant-employed">
                        <span>{book.Chapters ? book.Chapters.length : 0}</span>
                        <div>
                            <Button className="detail">Xem chi tiết</Button>
                            <FontAwesomeIcon icon={faPenToSquare} />
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
                    <Card bordered={false} className="criclebox tablespace mb-24" title="Quản lí truyện sách">
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

export default ManageBooks;
