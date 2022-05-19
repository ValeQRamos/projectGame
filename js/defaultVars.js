const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let frames = 0
let damage = 0
let extraDamage = 0
let red = damage + extraDamage

let clicks = 0
let specialHits = 0
let bossHits = 0



let requestId;

const slimeArmy = []

//arrow types
const arrows = []
let regular = 'images/heroe/arrow/Static.png'
let venomArrow = 'images/heroe/arrow/venom.png'
let iceArrow = 'images/heroe/arrow/ice.png'
let rockArrow = 'images/heroe/arrow/rock.png'
let arrowStyle = regular


//monster speed
let regularSpeed = 0.03
let monsterSpeed = regularSpeed


// sounds 
let gameSound = new Audio()
regularSound = 'audio/arrow.wav'
iceSound = 'audio/ice.wav'
rockSound = 'audio/rock.wav'
venomSound = 'audio/venom.wav'
gameSound.src = regularSound

let stepSound = new Audio()
stepSound.src = 'audio/snowStep.wav'


//buttons style
let black = 'rgb(25,25,25)'

let venomButton = document.querySelector('#venom')
let purple = 'rgb(145, 73, 240)'
venomButton.style.backgroundColor = purple

let iceButton = document.querySelector('#ice')
let blue = 'rgb(50, 160, 228)'
iceButton.style.backgroundColor = blue

let rockButton = document.querySelector('#rock')
let brown = 'rgb(149, 111, 95)'
rockButton.style.backgroundColor = 'rgb(125, 100, 75)'
rockButton.style.backgroundColor = brown


//animations
let idle = [
'images/heroe/attack/1.png',
'images/heroe/attack/2.png',
'images/heroe/attack/3.png',
'images/heroe/attack/4.png',
'images/heroe/attack/5.png',
'images/heroe/attack/6.png',
]

let enemyWalk = [
  'images/enemy/walk/1.png',
  'images/enemy/walk/2.png',
  'images/enemy/walk/3.png',
  'images/enemy/walk/4.png',
  'images/enemy/walk/5.png',
  'images/enemy/walk/6.png',
  'images/enemy/walk/7.png',
  'images/enemy/walk/8.png',
  'images/enemy/walk/9.png',

]

let slimeWalk = [
  'images/enemy/slime/2.png',
  'images/enemy/slime/3.png',
  'images/enemy/slime/4.png',
  'images/enemy/slime/1.png',
]

let blueSlimeWalk = [
  'images/enemy/blueSlime/1.png',
  'images/enemy/blueSlime/2.png',
  'images/enemy/blueSlime/3.png',
  'images/enemy/blueSlime/4.png',
]

let pinkSlimeWalk = [
  'images/enemy/pinkSlime/3.png',
  'images/enemy/pinkSlime/4.png',
  'images/enemy/pinkSlime/1.png',
  'images/enemy/pinkSlime/2.png',
  'images/enemy/pinkSlime/3.png',
  'images/enemy/pinkSlime/4.png',
  'images/enemy/pinkSlime/1.png',
  'images/enemy/pinkSlime/2.png',
  'images/enemy/pinkSlime/2.png'
]

let yellowSlimeRun = [
  'images/enemy/yellowSlime/1.png',
  'images/enemy/yellowSlime/2.png',
  'images/enemy/yellowSlime/3.png',
  'images/enemy/yellowSlime/4.png',
]

let redSlimeRun = [
  'images/enemy/redSlime/1.png',
  'images/enemy/redSlime/2.png',
  'images/enemy/redSlime/3.png',
  'images/enemy/redSlime/4.png',
]

let purpleSlimeRun = [
  'images/enemy/purpleSlime/1.png',
  'images/enemy/purpleSlime/2.png',
  'images/enemy/purpleSlime/3.png',
  'images/enemy/purpleSlime/4.png',
]

const funcionara = new Image()
  funcionara.src = 'images/backgrounds/gameOver.png'


//images for landing page
let logo = new Image()
logo.src = 'images/backgrounds/snowgame.png'

let arrowBg = new Image()
arrowBg.src = 'images/backgrounds/File1.png'

let bulbBg = new Image()
bulbBg.src = 'images/backgrounds/bulb.png'

let bookBg = new Image()
bookBg.src = 'images/backgrounds/book.png'
 
let extraBook = new Image()
extraBook.src = 'images/backgrounds/extraBooks.png'