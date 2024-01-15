import ListItem from './ListItem';
import '../../../assets/css/grid.css'
function List() {
    const chapterList = [
        {
            chapterNumber: '1',
            name: 'Tô minh',
            time: '1 năm trước',
        },
        {
            chapterNumber: '2',
            name: 'Đoạn thời gian tốt đẹp ấy',
            time: '4 năm trước',
        },
        {
            chapterNumber: '3',
            name: 'Bỗng nhiên quay đầu',
            time: '1 năm trước',
        },
        {
            chapterNumber: '4',
            name: 'Dị biến',
            time: '2 năm trước',
        },
        {
            chapterNumber: '5',
            name: 'Mộng ư',
            time: '1 năm trước',
        },
        {
            chapterNumber: '6',
            name: 'Ân trạch',
            time: '4 năm trước',
        },
        {
            chapterNumber: '7',
            name: 'Tráo phúng vạn năm trước',
            time: '1 năm trước',
        },
        {
            chapterNumber: '8',
            name: 'Huyết hỏa trùng trùng',
            time: '2 năm trước',
        },
        {
            chapterNumber: '9',
            name: 'Tối thán',
            time: '1 năm trước',
        },
        {
            chapterNumber: '10',
            name: 'Bỉ thương giả thiên cớ gì ngươi khóc',
            time: '4 năm trước',
        },
        {
            chapterNumber: '11',
            name: 'Tô Minh nổ giận',
            time: '1 năm trước',
        },
        {
            chapterNumber: '12',
            name: 'Sát cơ',
            time: '2 năm trước',
        },
        {
            chapterNumber: '13',
            name: 'Tà man',
            time: '1 năm trước',
        },
        {
            chapterNumber: '14',
            name: 'Lột xác',
            time: '4 năm trước',
        },
        {
            chapterNumber: '15',
            name: 'A công',
            time: '1 năm trước',
        },
        {
            chapterNumber: '16',
            name: 'Man Văn',
            time: '2 năm trước',
        },
    ];

    return (
        <div>
            <h2>Danh sách chương</h2>
            <div className='grid'>
                <div className='row'>
                {chapterList.map((item, index) => <ListItem key={index} data={item} />)}
                </div>
            </div>
        </div>
    );
}

export default List;
