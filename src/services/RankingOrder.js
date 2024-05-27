function RankingOrder(list, type) {
    let sortedData;
    switch (type) {
        case 'Đọc nhiều':
            sortedData = list.sort((a, b) => +b.view - +a.view);
            return sortedData;
        case 'Đề cử':
            sortedData = list.sort((a, b) => +b.vote - +a.vote);
            return sortedData;
        case 'Yêu thích':
            sortedData = list.sort((a, b) => +b.follow - +a.follow);
            return sortedData;
        case 'Tặng thưởng':
            sortedData = list.sort((a, b) => +b.vote - +a.vote);
            return sortedData;
        default:
            sortedData = list.sort(
                (a, b) => +b.view - +a.view + 5 * (+b.follow - +a.follow + +b.follow - +a.follow + +b.vote - +a.vote),
            );
            return sortedData;
    }
}

export default RankingOrder;
