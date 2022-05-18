function landing(){
  let logo = new Image()
  logo.src = 'images/backgrounds/snowgame.png'
  ctx.drawImage(logo,250,10,300,100)

  ctx.fillStyle = 'beige'
  ctx.font = '30px Roboto'
  ctx.fillText(`A creature is on its way to destroy your village`,100,150)
  ctx.fillText(`And only YOU can stop him.`,240,200)

  ctx.font = '16px Roboto'
  ctx.fillText(`or CLICK the brown button`,56,520)
  ctx.fillText(`To use the ROCK ARROW`,60,542)

  ctx.fillText(`or CLICK the purple button`,300,520)
  ctx.fillText(`To use the VENOM ARROW`,300,542)

  ctx.fillText(`or CLICK the blue button`,560,520)
  ctx.fillText(`To use the ICE ARROW`,568,542)

  ctx.font = '20px Roboto'
  ctx.fillStyle = 'beige'
  ctx.fillText(`PRESS  Q`,110,495)
  ctx.fillText(`PRESS  W`,360,495)
  ctx.fillText(`PRESS  E`,608,495)

}