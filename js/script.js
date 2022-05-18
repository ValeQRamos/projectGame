
window.onload = () => {
  // landing page
  landing()
  
  //game
  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('images/backgrounds/snow3.png',0.4)
  const snowBlur2 = new BgSnow('images/backgrounds/snow11.png',0.2)
  const heroe = new Heroe(idle,0,170,100,130)
  const enemy = new Enemy(enemyWalk,canvas.height +40,40,300,300,monsterSpeed)
  
  

  addEventListener('keydown',(event) =>{
    event.preventDefault()
    if(event.keyCode === 13){
      if(!requestId){startGame()}
    }
  })
  
  function startGame(){
    requestId = requestAnimationFrame(updateGame)
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

    generateEnemies()
    drawSlimes()
    drawBoss()
    generateArrows()
    testingLife()
    stats()

    if(requestId){requestAnimationFrame(updateGame)}
  }

  function testingLife(){
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
    if(frames % 654 === 0 ){
       let yRandom = Math.floor(Math.random() * (450 -50)) + 50
      const slime = new Slime(slimeWalk, canvas.width, yRandom, 50, 50, 0.5)

      slimeArmy.push(slime)
    }
  }

  function generateArrows(){
    arrows.forEach((arrow, indexOfArrow) => {
      if(arrow.x > canvas.width){
        arrows.splice(indexOfArrow,1)
      }else if(enemy.collision(arrow)){
        bossHits++
        damage += 0.75
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

  function gameOver(){ 
    requestId = undefined

    ctx.drawImage(funcionara,150,150,500,250)
  }


  function stats(){
    let acc = (bossHits / clicks) * 100
    let accurracy = acc.toFixed(2)

    let accurracyColor;

    if(accurracy > 75){
      accurracyColor = 'lime'
    } else if (accurracy > 50){
      accurracyColor = 'yellow'
    } else {
      accurracyColor = 'orangered'
    }

    ctx.fillStyle = 'rgba(0,0,0,0.5)'
    ctx.fillRect(60,canvas.height - 60,canvas.width - 120,50)
    ctx.fillStyle = 'rgba(234, 228, 216, 0.50)'
    ctx.fillRect(65,canvas.height -55,220,40)
    ctx.fillRect(290,canvas.height -55,220,40)
    ctx.fillRect(515,canvas.height -55,220,40)
    
    ctx.fillStyle = 'beige'
    ctx.font = '20px Roboto'
    ctx.fillText('TOTAL CLICKS :',70,canvas.height -30)
    ctx.fillText('BOSS HITS :',300, canvas.height -30)
    ctx.fillText('ACCURACY :',520, canvas.height -30)
    
    ctx.fillStyle = 'rgb(164, 255, 250)'
    ctx.font = '22px Roboto'
    ctx.fillText(`${clicks}`,220,canvas.height -30)
    ctx.fillText(`${bossHits}`,420,canvas.height - 30)
    ctx.fillStyle = accurracyColor
    ctx.fillText(`${accurracy}%`, 650,canvas.height - 30)
  }
 
  addEventListener('click', () => {
    event.preventDefault()
   arrows.push(new Arrow(75,heroe.y + 44 ,13,arrowStyle))
   clicks += 1
   arrowStyle = regular
   monsterSpeed = regular
  
  })
  //forEach

  addEventListener('keydown',(event) =>{
    if(event.keyCode === 81){
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
    
    if(event.keyCode === 87){
      if(venomButton.style.backgroundColor === purple){
        extraDamage += 3
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

  //heroe follow mouse on Y
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