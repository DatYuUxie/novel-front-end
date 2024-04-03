import BookContent from '../../components/BookContent';
import BookBanner from '../../components/BookBanner';
import BookHeader from '../../components/BookHeader';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"


function Book() {
	const { bookId } = useParams()
    console.log("bookid",bookId)
    return (
        <>
            <BookHeader bookId = {bookId} />
            <BookBanner />
            <BookContent />
        </>
    );
}

export default Book;
