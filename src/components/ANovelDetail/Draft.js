import DraftItem from './DraftItem';

function Intro({ bookID }) {
    return (
        <div>
            <DraftItem bookID={bookID} />
        </div>
    );
}

export default Intro;
