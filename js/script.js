window.onload = () => {

  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('images/backgrounds/snowBlur3.png',0.4)
  const snowBlur2 = new BgSnow('/images/backgrounds/snowBlur11.png',0.2)
  const heroe = new Heroe(idle,-20,170,300,300)
  const enemy = new Enemy(enemyWalk,canvas.height,130,400,400,0.07)
  



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
  
  function gameOver(){

    requestId = undefined
  }

  function winGame(){} //-----------------------

  function updateGame(){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)

    bg.draw()
    snowBlur1.draw()
    snowBlur2.draw()
    heroe.draw()
    enemy.draw()

    drawEnemies()
    generateArrows()

    if(requestId){requestAnimationFrame(updateGame)}
  }

  function generateEnemies(){} //---------------

  function generateArrows(){
    arrows.forEach((arrow,indexOfArrow) => {

      arrow.draw()

      if(enemy.collision(arrow)){
        console.log('hit');
      }
    })

  }

  function drawEnemies(){
    enemy.draw()
    if(enemy.x <= 100){
      gameOver()
    }
  }

  function stats(){} //----------------

  addEventListener('keydown',event => {
    event.preventDefault()
    if(event.keyCode === 38) {heroe.y -= 10}
    if(event.keyCode === 40) {heroe.y += 10}
  })

  addEventListener('click', () => {
    clicks++
   arrows.push(new Arrow(80,280,13))
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