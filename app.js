let count = 0;
cardFunction = (card) => {
    card == 2 || card == 3 || card == 4 || card == 5 || card == 6 ? count ++ : console.log()
    card == 7 || card == 8 || card == 9 ? count : console.log()
    card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A' ? count -- : console.log()
    result = count + (count > 0 ? " Bet" : " Hold");
    return count;
}
document.querySelector("#menma", cardFunction(2) + cardFunction(4) + cardFunction(7) + cardFunction(5) + cardFunction(2)).textContent = result;
