import BookContent from '../../components/BookContent';
import BookBanner from '../../components/BookBanner';
import BookHeader from '../../components/BookHeader';
import React, { useEffect } from 'react';

function Book() {
    return (
        <>
            <BookHeader />
            <BookBanner />
            <BookContent />
        </>
    );
}

export default Book;
