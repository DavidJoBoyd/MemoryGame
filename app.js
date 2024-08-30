const cardArray = [
	{
	name: 'fries',
	img: 'fries.png',
	},
	{
		name: 'cheeseburger',
		img: 'cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'milkshake.png',
	},
	{
		name: 'pizza',
		img: 'pizza.png',
	},
	{
	name: 'fries',
	img: 'fries.png',
	},
	{
		name: 'cheeseburger',
		img: 'cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'milkshake.png',
	},
	{
		name: 'pizza',
		img: 'pizza.png',
	}
]

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')

function createBoard(){
	for(let i = 0; i < cardArray.length; i++){
		const card = document.createElement('img')
		card.setAttribute('src', 'blank.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		gridDisplay.appendChild(card)
	}
}

createBoard()

function checkMatch(){
	const cards = document.querySelectorAll('#grid img')
	console.log(2)
	if(cardsChosen[0] == cardsChosen[1]){
		alert('You found a match!')
		cards[cardsChosenIds[0]].setAttribute('src', 'white.png')
		cards[cardsChosenIds[1]].setAttribute('src', 'white.png')
		cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
		cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
		cardsWon.push(cardsChosen)
	}
	else{
		cards[cardsChosenIds[0]].setAttribute('src', 'blank.png')
		cards[cardsChosenIds[1]].setAttribute('src', 'blank.png')
	}
	cardsChosen = []
	cardsChosenIds = []
}

function flipCard(){
	const cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenIds.push(cardId)
	console.log(cardArray[cardId].name)
	console.log('clicked', cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if(cardsChosen.length === 2){
		setTimeout(checkMatch, 500)	
	}
}