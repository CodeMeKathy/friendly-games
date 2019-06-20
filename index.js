// Option I

// Create an array of cards with card objects

let cards = [
	{
		id: 'card1',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/accessible-icon-brands.svg'
	},
	{
		id: 'card2',
		cardFrontImage: 'images/memoryCards/angrycreative-brands.svg'
	},
	{
		id: 'card3',
		cardFrontImage: 'images/memoryCards/asterisk-solid.svg'
	},
	{
		id: 'card4',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/balance-scale-right-solid.svg'
	},
	{
		id: 'card5',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/brain-solid.svg'
	},
	{
		id: 'card6',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cloud-sun-rain-solid.svg'
	},
	{
		id: 'card7',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cocktail-solid.svg'
	},
	{
		id: 'card8',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/accessible-icon-brands.svg'
	},
	{
		id: 'card9',
		cardFrontImage: 'images/memoryCards/angrycreative-brands.svg'
	},
	{
		id: 'card10',
		cardFrontImage: 'images/memoryCards/asterisk-solid.svg'
	},
	{
		id: 'card11',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/balance-scale-right-solid.svg'
	},
	{
		id: 'card12',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/brain-solid.svg'
	},
	{
		id: 'card13',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cloud-sun-rain-solid.svg'
	},
	{
		id: 'card14',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cocktail-solid.svg'
	},
	{
		id: 'card15',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cloud-sun-rain-solid.svg'
	},
	{
		id: 'card16',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cocktail-solid.svg'
	}
]

// Create an array for the cards currently in play.
let cardsInPlay = []

// Create game board
let createBoard = () => {
	for (let i = 0; i < 16; i++) {
		let cardElement = document.createElement('img')
		cardElement.setAttribute('data-id', [i])
		document.getElementById('gameBoard').appendChild(cardElement)
	}
}

console.log(cardsInPlay)
createBoard()

// Option II

// 1. Initialize Variables

// let cards = document.querySelectorAll('memoryCard)
// console.log(cards)

// let isCardFlipped = false
// let firstCard
// let secondCard

//  etc ...

// create an array of cards

// Assign a random number dataset.
// let id = randomly assigned #
// Use temperate literals to appended to the id in html.

// take array cards and shuffle them randomly using math.Number()

// Take newly created array and display

// shuffleBoard() { //IIFE

// }

// function flipCard() {
//  if (firstCard.onClick === false)
// }
// if onClick

// first card selection
// check to see if the dataAtt is the same  dataAtt === dataAtt; if so then secondCard != selected card.

// function cardFlipped() {
// let card = .memoryCard
// when .memoryCard is clicked check to see if there is already a firstCard.  If not, assign .this to firstCard and display card using `backface-visibility`.  Else assign .this to secondCard and display card using `backface-visibility`.
// }
