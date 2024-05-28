function RankingOrder(list, type) {
    let sortedData;
    switch (type) {
        case 'Đọc nhiều':
            console.log('doc');

            sortedData = list.sort((a, b) => +b.view - +a.view);
            return sortedData;
        case 'Đề cử':
            console.log('de');

            sortedData = list.sort((a, b) => +b.vote - +a.vote);
            return sortedData;
        case 'Yêu thích':
            console.log('yeu');

            sortedData = list.sort((a, b) => +b.follow - +a.follow);
            return sortedData;
        case 'Tặng thưởng':
            console.log('tang');
            sortedData = list.sort((a, b) => +b.reward - +a.reward);
            return sortedData;
        default:
            console.log('thinh');

            sortedData = list.sort(
                (a, b) => +b.view - +a.view + 5 * (+b.follow - +a.follow + +b.reward - +a.reward + +b.vote - +a.vote),
            );
            return sortedData;
    }
}

export default RankingOrder;
