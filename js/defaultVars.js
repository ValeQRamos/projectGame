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
let regular = '/images/heroe/arrow/Static.png'
let venomArrow = '/images/heroe/arrow/venom.png'
let iceArrow = '/images/heroe/arrow/ice.png'
let rockArrow = '/images/heroe/arrow/rock.png'
let arrowStyle = regular


//monster speed
let regularSpeed = 0.03
let monsterSpeed = regularSpeed


// sounds 
let gameSound = new Audio()
regularSound = '/audio/arrow.wav'
iceSound = '/audio/ice.wav'
rockSound = '/audio/rock.wav'
venomSound = '/audio/venom.wav'
gameSound.src = regularSound

let stepSound = new Audio()
stepSound.src = '/audio/snowStep.wav'


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


//animations
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

let slimeWalk = [
  'images/enemy/slime/1.png',
  'images/enemy/slime/2.png',
  'images/enemy/slime/3.png',
  'images/enemy/slime/4.png',
]

const funcionara = new Image()
  funcionara.src = '/images/backgrounds/gameOver.png'


let logo = new Image()

logo.src = '/images/backgrounds/snowgame.png'

