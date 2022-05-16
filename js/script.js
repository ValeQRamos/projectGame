
window.onload = () => {

  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('/images/backgrounds/snow3.png',0.4)
  const snowBlur2 = new BgSnow('/images/backgrounds/snow11.png',0.2)
  const heroe = new Heroe(idle,-20,170,300,300)
  const enemy = new Enemy(enemyWalk,canvas.height +40,40,500,500,monsterSpeed)
  
  

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
    ctx.drawImage(funcionara,150,150,500,250)
    requestId = undefined
  }

  function winGame(){
    ctx.globalAlpha = 0.3
    ctx.fillStyle = 'beige'
    ctx.fillRect(50,50,canvas.width -100,canvas.height -100)

    ctx.globalAlpha = 1
    ctx.fillStyle = 'crimson'
    ctx.font = '40px Roboto'
    ctx.fillText('Congratulations YOU WIN!',180,400)

    requestId = undefined
  }

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
    let red = clicks + extraDamage

    ctx.fillStyle = 'black'
    ctx.fillRect(195,15,410,35)
    ctx.fillStyle = 'limegreen';
    ctx.fillRect(200,20,400,25)
    ctx.fillStyle = 'orangered';
    ctx.fillRect(200,20,red,25)

    if (red >= 400){winGame()}   
  }

  function generateArrows(){
    arrows.forEach((arrow,indexOfArrow) => {
      arrow.draw()

      if(enemy.collision(arrow)){
        // console.log('hit');
      }
    })
  }

  function drawEnemies(){
    enemy.draw()
    if(enemy.x <= 70){
      gameOver()
    }
  }

  function stats(){}//-------------------- 
  
  addEventListener('keydown',event => {
    event.preventDefault()
    if(event.keyCode === 38) {heroe.y -= 10}
    if(event.keyCode === 40) {heroe.y += 10}
  })

  addEventListener('click', () => {
    event.preventDefault()
    clicks += 20
   arrows.push(new Arrow(80,280,13,arrowStyle))
   arrowStyle = regular
   monsterSpeed = regular

  })

  document.getElementById('ice').onclick = () => {
    if(iceButton.style.backgroundColor === blue){
      extraDamage += 0.5
      arrowStyle = iceArrow
      iceCounter++
      arrowSound.src = iceSound
      arrowSound.play()
    }

    iceButton.style.backgroundColor = black
    setTimeout(() => {
      iceButton.style.backgroundColor = blue
    },'5000')
  }

  document.getElementById('venom').onclick = () => {
    if(venomButton.style.backgroundColor === purple){
       extraDamage += 1
       arrowStyle = venomArrow
       venomCounter++
       arrowSound.src = venomSound
       arrowSound.play()
    }

    venomButton.style.backgroundColor = black
    setTimeout(() => {
       venomButton.style.backgroundColor = purple
    },'7000')
  }
  
  
  document.getElementById('rock').onclick = () => {
    if(rockButton.style.backgroundColor === brown){
      extraDamage += 3
      arrowStyle = rockArrow
      rockCounter++
      arrowSound.src = rockSound
      arrowSound.play()

      rockButton.style.backgroundColor = black
      setTimeout(() => {
        rockButton.style.backgroundColor = brown
      },'10000')
    }
  }

  addEventListener('keydown',event => {
    event.preventDefault()
    if(event.keyCode === 90){gameOver()} //z 2 veces
    if(event.keyCode === 88){winGame()}  //x 2 veces
  })
};

 



//temas de generar pipes en la clase 03:01
//borrar elementos que se salieron del canvas 03:33 y 03:37 activar gameOver con choques
//colocar el gameover 04:03
//idea disparar con keydown y dejar de disparar con keyup
//poner los puntos 03:57
//ponerle audio 04:15


//checar como provocar un gameOver (requestId = undefined)