class Deck {
    constructor(cards, count) {
        this.cards = cards;
        Object.defineProperty(this, 'count', { 
            value: count,
            writable: false 
        });
    }

    shuffle = () => {
        this.cards.sort(() => Math.random() * 10 - 5);
    }

    draw = n => {
        this.cards = this.cards.slice(0, this.cards.length - n);

        return this.cards.slice(this.cards.length - n);
    }
}

class Card {
    constructor(suit, rank, isFaceCard) {
        this.suit = suit;
        this.rank = rank;
        Object.defineProperty(this, 'isFaceCard', { 
            value: isFaceCard,
            writable: false 
        });
    }

    toString = () => {
        return `${this.rank} of ${this.suit}`;
    }

    compare = (cardOne, cardTwo) => {
        if (cardOne.rank === 1 && cardTwo.rank === 1) {
            return 0;
        } else if (cardOne.rank === 1) {
            return 1;
        } else if (cardTwo.rank === 1) {
            return -1;
        }

        return cardOne.rank - cardTwo.rank;
    }
}

class Player {
    constructor(name, wins, deck) {
        this.name = name;
        Object.defineProperty(this, 'wins', { 
            value: wins,
            writable: false 
        });
        this.deck = deck;
    }

    play = (playerOne, playerTwo) => {
        let playerOnePoints = 0;
        let playerTwoPoints = 0;

        while (playerOne.deck.cards.length !== 0) {
            const roundResult = playerOne.deck.cards[playerOne.deck.cards.length - 1].compare(
                playerOne.deck.cards[playerOne.deck.cards.length - 1],
                playerTwo.deck.cards[playerOne.deck.cards.length - 1]
            )

            if (roundResult > 0) {
                playerOnePoints++;
            } else if (roundResult < 0) {
                playerTwoPoints++;
            }

            playerOne.deck.cards.pop();
            playerTwo.deck.cards.pop();

        }

        let result;

        if (playerOnePoints > playerTwoPoints) {
            result = `${playerOne.name} wins ${playerOnePoints} to ${playerTwoPoints}`;
        } else if (playerOnePoints < playerTwoPoints) {
            result = `${playerTwo.name} wins ${playerTwoPoints} to ${playerOnePoints}`;
        } else {
            result = `A draw..`;
        }

        console.log(result);
    }
}

const deck1 = new Deck([], 52);
const deck2 = new Deck([], 52);

const createDeck = (deck) => {
    const suits = ['h', 'd', 'c', 's'];

    for (let i = 0, j = 1, k = 0; i < 52; i++, j++) {
        deck.cards.push(new Card(suits[k], j, j == 1 || j > 10));
    
        if (j === 13) {
            deck1.shuffle();
            deck2.shuffle();
            j = 0; 
            k++;
        }
    }
}

createDeck(deck1);
createDeck(deck2);

const player = new Player('Danyla', 0, deck1);
const player2 = new Player('Denis', 0, deck2);

player.play(player, player2);
