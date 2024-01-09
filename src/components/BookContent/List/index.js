import ListItem from './ListItem';
import '../../../assets/css/grid.css'
function List() {
    const chapterList = [
        {
            chapterNumber: '1',
            name: 'Iam not an Undead!',
            time: '1 năm trước',
        },
        {
            chapterNumber: '2',
            name: 'begin',
            time: '4 năm trước',
        },
        {
            chapterNumber: '3',
            name: 'Luck',
            time: '1 năm trước',
        },
        {
            chapterNumber: '4',
            name: 'get a good dragon',
            time: '2 năm trước',
        },
        {
            chapterNumber: '1',
            name: 'Iam not an Undead!',
            time: '1 năm trước',
        },
        {
            chapterNumber: '2',
            name: 'begin',
            time: '4 năm trước',
        },
        {
            chapterNumber: '3',
            name: 'Luck',
            time: '1 năm trước',
        },
        {
            chapterNumber: '4',
            name: 'get a good dragon',
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
