const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let frames = 0
let points = 0
let clicks = 0

let venomCounter = 0
let iceCounter = 0
let rockCounter = 0
let extraDamage = 0
// let mouseX = 0
// let mouseY = 0
let requestId;

const enemies = []

//arrow types
const arrows = []
let regular = '/images/heroe/arrow/Move.png'
let venomArrow = '/images/heroe/arrow/venom.png'
let iceArrow = '/images/heroe/arrow/ice.png'
let rockArrow = '/images/heroe/arrow/rock.png'

let arrowStyle = regular


//monster speed
let regularSpeed = 1
let slowSpeed = 1
let monsterSpeed = regularSpeed


// sounds 
let arrowSound = new Audio()
regularSound = '/audio/arrow.wav'
iceSound = '/audio/ice.wav'
rockSound = '/audio/rock.wav'
venomSound = '/audio/venom.wav'
arrowSound.src = regularSound


//buttons style
let black = 'rgb(25,25,25)'

let venomButton = document.querySelector('#venom')
let purple = 'rgb(115, 80, 115)'
venomButton.style.backgroundColor = purple

let iceButton = document.querySelector('#ice')
let blue = 'rgb(70, 135, 175)'
iceButton.style.backgroundColor = blue


let rockButton = document.querySelector('#rock')
let brown = 'rgb(90, 85, 85)'
rockButton.style.backgroundColor = 'rgb(125, 100, 75)'
rockButton.style.backgroundColor = brown


//heroe default
let idle = [
'/images/heroe/attack/1.png',
'/images/heroe/attack/2.png',
'/images/heroe/attack/3.png',
'/images/heroe/attack/4.png',
'/images/heroe/attack/5.png',
'/images/heroe/attack/6.png',
]

let enemyWalk = [
  '/images/enemy/walk/1.png',
  '/images/enemy/walk/2.png',
  '/images/enemy/walk/3.png',
  '/images/enemy/walk/4.png',
  '/images/enemy/walk/5.png',
  '/images/enemy/walk/6.png',
  '/images/enemy/walk/7.png',
  '/images/enemy/walk/8.png',
  '/images/enemy/walk/9.png',
]


const funcionara = new Image()
  funcionara.src = '/images/backgrounds/gameOver.png'