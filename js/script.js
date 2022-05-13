window.onload = () => {

  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('images/backgrounds/snowBlur3.png',0.4)
  const snowBlur2 = new BgSnow('/images/backgrounds/snowBlur11.png',0.2)
  const heroe = new Heroe(idle,10,200,300,300)
  // const enemy = new Enemy(enemyWalk,canvas.height,150,400,400,0.07)
  



  // document.getElementById('startBtn').onclick = () => {
  //   if(!requestId){startGame()} 
  // }

  addEventListener('keydown',(event) =>{
    event.preventDefault()
    if(event.keyCode === 13){
      if(!requestId){startGame()}
    }
  })
  
  function startGame(){
    requestId = requestAnimationFrame(updateGame)
  }
  
  function gameOver(){}

  function winGame(){}

  function updateGame(){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()
    snowBlur1.draw()
    snowBlur2.draw()
    heroe.draw()
    // enemy.draw()

    arrows.forEach(arrow => { arrow.draw() })

    if(requestId){requestAnimationFrame(updateGame)}
  }

  function generateEnemies(){}

  function generateArrows(){}

  function drawEnemies(){}

  addEventListener('keydown',event => {
    event.preventDefault()
    if(event.keyCode === 38) {heroe.y -= 10}
    if(event.keyCode === 40) {heroe.y += 10}
  })

  addEventListener('click', () => {
    clicks++
   arrows.push(new Arrow(100,310,13))
   console.log(clicks);
  })

};




//temas de gravedad en la clase 02:32
//temas de generar pipes en la clase 03:01
//borrar elementos que se salieron del canvas 03:33 y 03:37 activar gameOver con choques
//colocar el gameover 04:03
//idea disparar con keydown y dejar de disparar con keyup
//poner los puntos 03:57
//ponerle audio 04:15


//checar como provocar un gameOver (requestId = undefined)