function landing(){
  ctx.drawImage(logo,10,10,300,100)

  ctx.drawImage(arrowBg,120,490,60,60)
  ctx.drawImage(arrowBg,370,490,60,60)
  ctx.drawImage(arrowBg,620,490,60,60)


  ctx.fillStyle = 'beige'
  ctx.font = '20px monospace'
  ctx.fillText(`A monster is on its way to destroy your village`,270,43)
  ctx.fillText(`And only YOU can stop him.`,475,90)

  ctx.font = '16px monospace'
  ctx.fillText(`or CLICK the brown button`,56,465)
  ctx.fillText(`To use the ROCK ARROW`,60,485)

  ctx.fillText(`or CLICK the purple button`,300,465)
  ctx.fillText(`To use the VENOM ARROW`,300,485)

  ctx.fillText(`or CLICK the blue button`,560,465)
  ctx.fillText(`To use the ICE ARROW`,568,485)

  ctx.font = '25px monospace'
  ctx.fillStyle = 'beige'
  ctx.fillText(`PRESS Q`,110,440)
  ctx.fillText(`PRESS W`,360,440)
  ctx.fillText(`PRESS E`,608,440)

  ctx.fillRect(10,110,780,300)
  ctx.fillStyle = 'rgb(39, 46, 49)'
  ctx.fillRect(15,115,770,290)

  ctx.drawImage(bookBg,25,130,43,43)
  ctx.drawImage(bulbBg,25,340,45,45)
  ctx.drawImage(extraBook,25,235,45,45)

  ctx.font = '22px monospace'
  ctx.fillStyle = 'beige'

  ctx.fillText('INSTRUCTIONS :',80,160)
  ctx.fillText('EXTRA INFO :',80,265)
  ctx.fillText('PRO TIP :',80,370)

  ctx.font = '18px monospace'
  ctx.fillStyle = 'beige'
  ctx.fillText('- You have to defeat the monster using your clicks.',250,157)
  ctx.fillText('- Rock arrow can be used every 3 seconds',245,263)
  ctx.fillText('- Venom arrow can be used every 6 seconds',245,283)
  ctx.fillText('- Ice arrow can be used every 12 seconds',246,303)
  ctx.fillText('- You can win without using the special arrows...',245,367)
  ctx.fillText('just be fast',265,390)
  ctx.fillText('- Also, do not let slimes go past you, stop them',251,185)
  ctx.fillText('by placing your character in their way.',270,210)

}


function dawWinning(){
    ctx.fillStyle = 'rgb(30, 36, 36)'
    ctx.fillRect(0,0,canvas.width,canvas.height)

    ctx.globalAlpha = 1
    ctx.fillStyle = 'beige'
    ctx.font = '45px monospace'
    ctx.fillText('CONGRATULATIONS YOU WIN!',100,100)
    
    ctx.font = '28px monospace'
    ctx.fillText('Thanks to you, your village is safe again.',85,170)
    ctx.fillText('You defeated the monster,',200,220)
    ctx.fillText('and without their leader the slimes',145,270)
    ctx.fillText('decided to retreat',270,320)

    ctx.drawImage(winThrophy,20,370,120,120)
    ctx.drawImage(winThrophy,220,370,120,120)
    ctx.drawImage(winThrophy,450,370,120,120)
    ctx.drawImage(winThrophy,660,370,120,120)
}


function drawGameOver(){
  ctx.fillStyle = 'rgb(30, 36, 36)'
  ctx.fillRect(0,0,canvas.width,canvas.height)

  ctx.globalAlpha = 1
  ctx.fillStyle = 'beige'
  ctx.font = '55px monospace'
  ctx.fillText('YOU LOST!',260,100)

  ctx.font = '28px monospace'
  ctx.fillText('You allowed the slimes into the village',85,170)
  ctx.fillText(` and they’ve destroyed it.`,200,220)

  ctx.drawImage(loseFLame,75,434,150,150)
  ctx.drawImage(loseFLame,240,434,150,150)
  ctx.drawImage(loseFLame,460,434,150,150)
  ctx.drawImage(loseFLame,600,434,150,150)
}