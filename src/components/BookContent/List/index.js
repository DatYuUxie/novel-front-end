import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import '../../../assets/css/grid.css';
import { getChapterbyBookId } from '../../../api/api';
function List({ bookID }) {
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        const fetchChapters = async () => {
            const res = await getChapterbyBookId(bookID);
            if (res && res.data && res.data.DT) {
                setChapters(res.data.DT);
            }
        };

        fetchChapters();
    }, [bookID]);
    return (
        <div>
            <div className="grid">
                <div className="row">
                    {chapters.map((chapter, index) => (
                        <ListItem chapter={chapter} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default List;
