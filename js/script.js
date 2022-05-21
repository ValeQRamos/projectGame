
window.onload = () => {
  landing()
  
  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('images/backgrounds/snow.png',0.4)
  const snowBlur2 = new BgSnow('images/backgrounds/snow8.png',0.2)
  const heroe = new Heroe(idle,15,170,100,130)
  const enemy = new Enemy(enemyWalk,canvas.height +40,100,250,250,monsterSpeed)
  
  addEventListener('keydown',(event) =>{
    event.preventDefault()
    if(event.keyCode === 13){
      if(!requestId){startGame()}
    }
  })
  
  function startGame(){
    battleMusic.play()
    battleMusic.volume = 0.2
    requestId = requestAnimationFrame(updateGame)
  }
  
  function winGame(){
    battleMusic.pause()
    victoryMusic.play()
    victoryMusic.volume = 0.2
    requestId = undefined
    dawWinning()  //from landingPage.js
  }

  function gameOver(){ 
    battleMusic.pause()
    gameOverMusic.play()
    gameOver.volume = 0.2
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawGameOver()
    requestId = undefined
  }

  function updateGame(){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)

    bg.draw()
    snowBlur2.draw()
    heroe.draw()

    generateEnemies()
    drawSlimes()
    drawBoss()
    generateArrows()

    snowBlur1.draw()
    enemyLife()
    stats()

    if(requestId){requestAnimationFrame(updateGame)}
  }

  function enemyLife(){
    let red = damage + extraDamage

    ctx.fillStyle = 'black'
    ctx.fillRect(195,15,410,35)
    ctx.fillStyle = 'limegreen';
    ctx.fillRect(200,20,400,25)
    ctx.fillStyle = 'orangered';
    ctx.fillRect(200,20,red,25)

    if (red >= 400){winGame()}   
  }

  function generateEnemies(){
    if(frames % 345 === 0 ){
      let yRandom = Math.floor(Math.random() * (450 -50)) + 50

     

      const slime = new Slime(slimeWalk, canvas.width, yRandom, 50, 50, 1.20)
      const blueSlime = new Slime(blueSlimeWalk, canvas.width, yRandom, 50, 50, 0.7)
      const pinkSlime = new Slime(pinkSlimeWalk, canvas.width, yRandom, 50, 50, 0.7)
      const yellowSlime = new Slime(yellowSlimeRun, canvas.width, yRandom, 50, 50, 0.7)
      const purpleSlime = new Slime(purpleSlimeRun, canvas.width, yRandom, 50, 50, 0.7)

      let allTheSlimes = [slime, blueSlime, pinkSlime, yellowSlime, purpleSlime];

      slimeArmy.push(allTheSlimes[Math.floor(Math.random() * allTheSlimes.length)])
    }
  }

  function generateArrows(){
    arrows.forEach((arrow, indexOfArrow) => {
      if(arrow.x > canvas.width){
        arrows.splice(indexOfArrow,1)
      }else if(enemy.collision(arrow)){
        bossHits++
        damage += 1.1
        arrows.splice(indexOfArrow,1)
      }
      arrow.draw()
    })
  }

  function drawSlimes(){
    slimeArmy.forEach((slime, indexOfSlime) => {
      slime.draw()
      if(heroe.collision(slime)){
        stepSound.play()
        deadSlimes++
        slimeArmy.splice(indexOfSlime,1)
      }

      if(slime.x <= -10){
        gameOver()
      }
    })
  }

  function drawBoss(){
    enemy.draw()
    if(enemy.x <= 60){
      gameOver()
    }
  }

  function stats(){
    statsInfo()
  }
 
  addEventListener('click', () => {
    event.preventDefault()
   arrows.push(new Arrow(75,heroe.y + 44 ,13,arrowStyle))
   clicks += 1
   arrowStyle = regular
   monsterSpeed = regular
  
  })

  addEventListener('keydown',(event) =>{
    if(event.keyCode === 81){
      if(rockButton.style.backgroundColor === brown){
        extraDamage += 2.2
        arrowStyle = rockArrow
        specialHits++
        gameSound.src = rockSound
        gameSound.play()
  
        rockButton.style.backgroundColor = black
        setTimeout(() => {
          rockButton.style.backgroundColor = brown
        },'3000')
      }
    }
    
    if(event.keyCode === 87){
      if(venomButton.style.backgroundColor === purple){
        extraDamage += 5.5
        arrowStyle = venomArrow
        specialHits++
        gameSound.src = venomSound
        gameSound.play()
     }
 
     venomButton.style.backgroundColor = black
     setTimeout(() => {
        venomButton.style.backgroundColor = purple
     },'6000')
    }
    
    if(event.keyCode === 69){
      if(iceButton.style.backgroundColor === blue){
        extraDamage += 11
        arrowStyle = iceArrow
        specialHits++
        gameSound.src = iceSound
        gameSound.play()
      }
  
      iceButton.style.backgroundColor = black
      setTimeout(() => {
        iceButton.style.backgroundColor = blue
      },'12000')
    }
  })

  document.getElementById('rock').onclick = () => {
    if(rockButton.style.backgroundColor === brown){
      extraDamage += 1.5
      arrowStyle = rockArrow
      specialHits++
      gameSound.src = rockSound
      gameSound.play()

      rockButton.style.backgroundColor = black
      setTimeout(() => {
        rockButton.style.backgroundColor = brown
      },'3000')
    }
  }

  document.getElementById('venom').onclick = () => {
    if(venomButton.style.backgroundColor === purple){
       extraDamage += 3.75
       arrowStyle = venomArrow
       specialHits++
       gameSound.src = venomSound
       gameSound.play()
    }

    venomButton.style.backgroundColor = black
    setTimeout(() => {
       venomButton.style.backgroundColor = purple
    },'6000')
  }

  document.getElementById('ice').onclick = () => {
    if(iceButton.style.backgroundColor === blue){
      extraDamage += 7.5
      arrowStyle = iceArrow
      specialHits++
      gameSound.src = iceSound
      gameSound.play()
    }

    iceButton.style.backgroundColor = black
    setTimeout(() => {
      iceButton.style.backgroundColor = blue
    },'12000')
  }

  canvas.addEventListener('mousemove',mousePosition)
  function mousePosition(event){
    let rect = canvas.getBoundingClientRect()

    heroe.y = event.clientY - rect.top - heroe.h / 2
  }
  
  addEventListener('keydown',event => {
    event.preventDefault()
    if(event.keyCode === 90){gameOver()} //z 2 veces
    if(event.keyCode === 88){winGame()}  //x 2 veces
  })
};


console.log();