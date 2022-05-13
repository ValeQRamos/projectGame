window.onload = () => {
  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('images/backgrounds/snowBlur3.png',0.4)
  const snowBlur2 = new BgSnow('/images/backgrounds/snowBlur11.png',0.2)
  const testing = new Heroe(idle,10,200,300,300)
  // const superMan = new Character(100,100,100,'images/charcaters/149936-flying-hero-download-hq.png')


  document.getElementById('startBtn').onclick = () => {
    if(!requestId){startGame()}
    
  }
  
  function startGame(){
    requestId = requestAnimationFrame(updateGame)
  }
  
  function gameOver(){

  }

  function winGame(){

  }

  function updateGame(){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()
    snowBlur1.draw()
    snowBlur2.draw()
    testing.draw()
    // superMan.draw(mouseX,mouseY)
    if(requestId){requestAnimationFrame(updateGame)}
  }

  function generateEnemies(){

  }

  function drawEnemies(){

  }

  addEventListener('keydown',event => {
    event.preventDefault()
    if(event.keyCode === 38) {testing.y -= 10}

    if(event.keyCode === 40) {testing.y += 10}
  })

};




//temas de gravedad en la clase 02:32
//temas de generar pipes en la clase 03:01
//idea disparar con keydown y dejar de disparar con keyup

//checar como provocar un gameOver (requestId = undefined)