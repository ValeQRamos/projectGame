const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let frames = 0
let points = 0
let clicks = 0
let bomb = 0

let mouseX = 0
let mouseY = 0

const arrows = []
const enemies = []

//arrow types!
let regular = '/images/heroe/arrow/Move.png'
let venom = '/images/heroe/arrow/venom.png.png'
let ice = '/images/heroe/arrow/ice.png'
let rock = '/images/heroe/arrow/rock.png'

let arrowStyle = regular



let requestId;

/* 
let audio = new Audio()
audio.src = 
*/

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


