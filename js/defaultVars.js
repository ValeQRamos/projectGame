const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let frames = 0
let points = 0

let mouseX = 0
let mouseY = 0

let requestId;

/* 
let audio = new Audio()
audio.src = 
*/

//heroe default
let idle = [
'/images/charcaters/attack/1.png',
'/images/charcaters/attack/2.png',
'/images/charcaters/attack/3.png',
'/images/charcaters/attack/4.png',
'/images/charcaters/attack/5.png',
'/images/charcaters/attack/6.png',
]