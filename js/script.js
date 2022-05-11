window.onload = () => {
  const bg = new Background('images/backgrounds/background.png')
  const snowBlur1 = new BgSnow('images/backgrounds/snowBlur3.png',0.4)
  const snowBlur2 = new BgSnow('/images/backgrounds/snowBlur11.png',0.2)


  document.getElementById('startBtn').onclick = () => {
    startGame()
  }

  
  function startGame(){
  
    updateGame()  //investigar lo de requestId
   
  }
  
  function updateGame(){
    bg.draw()
    snowBlur1.draw()
    snowBlur2.draw()


    requestAnimationFrame(updateGame)
  }

}