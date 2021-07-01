// Create an array of cards with card objects

let cards = [
	{
		id: 'card1',
		cardFrontImage: 'assets/images/memoryCards/accessible-icon-brands.svg'
	},
	{
		id: 'card2',
		cardFrontImage: 'assets/images/memoryCards/balance-scale-right-solid.svg'
	},
	{
		id: 'card3',
		cardFrontImage: 'assets/images/memoryCards/cocktail-solid.svg'
	},
	{
		id: 'card4',
		cardFrontImage: 'assets/images/memoryCards/heart-solid.svg'
	},

	{
		id: 'card5',
		cardFrontImage: 'assets/images/memoryCards/praying-hands-solid.svg'
	},
	{
		id: 'card6',
		cardFrontImage: 'assets/images/memoryCards/code-solid.svg'
	},
	{
		id: 'card7',
		cardFrontImage: 'assets/images/memoryCards/coffee-solid.svg'
	},
	{
		id: 'card8',
		cardFrontImage: 'assets/images/memoryCards/gem-regular.svg'
	},
	{
		id: 'card9',
		cardFrontImage: 'assets/images/memoryCards/accessible-icon-brands.svg'
	},
	{
		id: 'card10',
		cardFrontImage: 'assets/images/memoryCards/balance-scale-right-solid.svg'
	},
	{
		id: 'card11',
		cardFrontImage: 'assets/images/memoryCards/cocktail-solid.svg'
	},
	{
		id: 'card12',
		cardFrontImage: 'assets/images/memoryCards/heart-solid.svg'
	},
	{
		id: 'card13',
		cardFrontImage: 'assets/images/memoryCards/praying-hands-solid.svg'
	},
	{
		id: 'card14',
		cardFrontImage: 'assets/images/memoryCards/code-solid.svg'
	},
	{
		id: 'card15',
		cardFrontImage: 'assets/images/memoryCards/coffee-solid.svg'
	},
	{
		id: 'card16',
		cardFrontImage: 'assets/images/memoryCards/gem-regular.svg'
	}
	// All card images provided by Font Awesome's glorious Free License.  Thank you for giving back.
]

let flipped = false
let firstCard, secondCard

// alert('You have the memory of an elephant.  You win, Congrats!) when all eight matches are made

let matchedCards = []

let alertWin = () => {
	if (matchedCards.length === 16) {
		alert(
			'Congrats; you have the memory of an elephant!\nPress the New Game button to play again.\nThanks for playing'
		)
	}
}

// Reset both the firstCard and secondCard

let resetCards = (firstCard, secondCard) => {
	setTimeout(() => {
		// Flip both cards back over

		firstCard.classList.replace('flipped', 'unflipped')
		secondCard.classList.replace('flipped', 'unflipped')
		firstCard.setAttribute('src', ' ')
		secondCard.setAttribute('src', ' ')

		firstCard.setAttribute(
			'style',
			'background-color:#ccfbfe; border: 1px solid; border-color:#af489a; padding: 1em;'
		)
		secondCard.setAttribute(
			'style',
			'background-color:#ccfbfe; border: 1px solid; border-color:#af489a; padding: 1em'
		)
	}, 900)
}

// Check user's firstCard and secondCard matching Function

let checkForMatch = () => {
	// When firstCard and secondCard match

	if (firstCard.getAttribute('src') === secondCard.getAttribute('src')) {
		// Both cardFrontImages remain visible (flipped up) and flipCard function removed.

		firstCard.removeEventListener('click', flipCard)
		secondCard.removeEventListener('click', flipCard)

		matchedCards.push(firstCard.getAttribute('id'))
		matchedCards.push(secondCard.getAttribute('id'))
		// alert('You found a match.. keep going to find them all, for the WIN!')

		// When firstCard and secondCard do NOT match
	} else {
		resetCards(firstCard, secondCard)
	}
	firstCard = null
	secondCard = null
	flipped = false
	alertWin()
}

// Flip Card Function
let flipCard = function() {
	let cardId = this.getAttribute('dataId', cards[0].cardFrontImage)
	this.setAttribute('src', cards[cardId].cardFrontImage)
	this.setAttribute(
		'style',
		'background-color:#AD7A99; border: 1px solid; border-color:#98D2EB; svg { fill: #fff }'
	)
	this.classList.add('flipped')

	if (this === firstCard) return
	if (!flipped) {
		flipped = true
		firstCard = this
		return
	}
	secondCard = this
	checkForMatch()
}

// Create gameBoard
let createBoard = (() => {
	for (let i = 0; i < 16; i++) {
		// Create an image element for each item in the array.
		let cardElement = document.createElement('img')
		// Set each created image element with data attribute of `data-id`.
		cardElement.setAttribute('dataId', [i])
		// Add onClick to each created element.
		cardElement.addEventListener('click', flipCard)
		// Append the created images to the html element gameBoard as child elements.
		document.getElementById('gameBoard').appendChild(cardElement)
	}
})()

// Create a shuffleBoard()
// Fisher–Yates Shuffle Algorithm
let cardArrayLength = cards.length - 1
let randomIndex, tempCardArray
;(shuffleBoard = () => {
	for (i = cardArrayLength; i > 0; i--) {
		randomIndex = Math.floor(Math.random() * i)
		tempCardArray = cards[i]
		cards[i] = cards[randomIndex]
		cards[randomIndex] = tempCardArray
	}
})()

// References:
// - Fisher–Yates Shuffle Algorithm
// - Marina Ferreira: https://marina-ferreira.github.io/projects/js/memory-game/
