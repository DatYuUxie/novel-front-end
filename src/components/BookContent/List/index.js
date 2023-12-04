import ListItem from './ListItem';

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
    ];

    return (
        <div>
            <h2>Danh sách chương</h2>
            {chapterList.map((item, index) => <ListItem key={index} data={item} />)}
        </div>
    );
}

export default List;
