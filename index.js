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
		cardFrontImage: 'images/memoryCards/praying-hands-solid.svg'
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
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cannabis-solid.svg'
	},
	{
		id: 'card14',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cloud-sun-rain-solid.svg'
	},
	{
		id: 'card15',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/cocktail-solid.svg'
	},
	{
		id: 'card16',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/code-solid.svg'
	},
	{
		id: 'card17',
		cardFrontImage: 'images/memoryCards/coffee-solid.svg'
	},
	{
		id: 'card18',
		cardFrontImage: 'images/memoryCards/dev-brands.svg'
	},
	{
		id: 'card19',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/door-open-solid.svg'
	},
	{
		id: 'card20',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/female-solid.svg'
	},
	{
		id: 'card21',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/free-code-camp-brands.svg'
	},
	{
		id: 'card22',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/gem-regular.svg'
	},
	{
		id: 'card23',
		cardFrontImage: 'memGame/friendly-games/images/github-brands.svg'
	},
	{
		id: 'card24',
		cardFrontImage: 'images/memoryCards/glass-martini-alt-solid'
	},
	{
		id: 'card25',
		cardFrontImage: 'images/memoryCards/headphones-solid.svg'
	},
	{
		id: 'card26',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/heart-solid.svg'
	},
	{
		id: 'card27',
		cardFrontImage: 'memGame/friendly-games/images/hiking-solid.svg'
	},
	{
		id: 'card28',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/icons-solid.svg'
	},
	{
		id: 'card29',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/lemon-regular.svg'
	},
	{
		id: 'card30',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/passport-solid.svg'
	},
	{
		id: 'card16',
		cardFrontImage: 'memGame/friendly-games/images/memoryCards/pepper-hot-solid.svg'
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
