window.onload = () => {

  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('/images/backgrounds/snow3.png',0.4)
  const snowBlur2 = new BgSnow('/images/backgrounds/snow11.png',0.2)
  const heroe = new Heroe(idle,-20,170,300,300)
  const enemy = new Enemy(enemyWalk,canvas.height +40,40,500,500,0.03)
  


  

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
    fillRect(0,0,canvas.width,canvas.height)
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

    testingLife()

    if(requestId){requestAnimationFrame(updateGame)}
  }

  function generateEnemies(){} //---------------

  function testingLife(){
    ctx.fillStyle = 'black'
    ctx.fillRect(195,495,410,35)
    ctx.fillStyle = 'limegreen';
    ctx.fillRect(200,500,400,25)
    ctx.fillStyle = 'orangered';
    ctx.fillRect(200,500,clicks + bomb,25)
  }

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
    if(enemy.x <= 70){
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
    clicks += 1
   arrows.push(new Arrow(80,280,13,arrowStyle))
   console.log(clicks);
   arrowStyle = regular
  })

};

 document.getElementById('test').onclick = () => {
  venom += 0.5
  arrowStyle = ice
 }

//temas de gravedad en la clase 02:32
//temas de generar pipes en la clase 03:01
//borrar elementos que se salieron del canvas 03:33 y 03:37 activar gameOver con choques
//colocar el gameover 04:03
//idea disparar con keydown y dejar de disparar con keyup
//poner los puntos 03:57
//ponerle audio 04:15


//checar como provocar un gameOver (requestId = undefined)