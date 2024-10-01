let count = 0;

function countCards() {
    const cardsInput = document.getElementById('cards').value;
    const cards = cardsInput.split(',').map(card => card.trim());
    count = 0;

    cards.forEach(card => {
        switch (card) {
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                count++;
                break;
            case '7':
            case '8':
            case '9':
                break;
            case '10':
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                count--;
                break;
            default:
                alert(`Invalid card: ${card}`);
                break;
        }
    });

    const decision = count > 0 ? 'Bet' : 'Hold';
    document.getElementById('output').innerText = `${count} ${decision}`;
}
