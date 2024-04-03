import BookContent from '../../components/BookContent';
import BookBanner from '../../components/BookBanner';
import BookHeader from '../../components/BookHeader';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Book() {
    const { bookID } = useParams();
    return (
        <>
            <BookHeader bookID={bookID} />
            <BookBanner bookID={bookID} />
            <BookContent bookID={bookID} />
        </>
    );
}

export default Book;
