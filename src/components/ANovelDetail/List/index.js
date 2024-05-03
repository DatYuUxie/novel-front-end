import ListItem from './ListItem';
import '../../../assets/css/grid.css';
import { getChapterbyBookId } from '../../../api/api';
import { useEffect, useState } from 'react';
function List({ bookID }) {
    const [publishChapters, setpublishChapters] = useState([]);
    useEffect(() => {
        const fetchChapters = async () => {
            const res = await getChapterbyBookId(bookID);
            if (res && res.data && res.data.DT) {
                setpublishChapters(res.data.DT);
            }
        };

        fetchChapters();
    }, [bookID]);
    return (
        <div>
            <div className="grid">
                <div className="row">
                    {publishChapters.map((chapter, index) => (
                        <ListItem chapter={chapter} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default List;
