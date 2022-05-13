class Background{
  constructor(imgSrc){
    this.x = 0
    this.y = 0
    this.w = canvas.width
    this.h = canvas.height
    
    this.imgSrc = imgSrc
    this.img = new Image()
    this.img.src = this.imgSrc
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y ,this.w, this.h)
  }
}

class BgSnow extends Background{
  constructor(imgSrc,velocity){
    super(imgSrc)
    this.velocity =velocity
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y ,this.w, this.h)
    this.y += this.velocity
      if(this.y > +canvas.height){this.y = 0}
      ctx.drawImage(
        this.img,
        this.x,
        this.y -this.h,
        this.w,
        this.h)
  }
}

class Heroe {
  constructor(arrImg, x,y,w,h){
    this.arrImg = arrImg
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.image1 = new Image()
    this.image1.src = arrImg[0]
    this.image2 = new Image()
    this.image2.src = arrImg[1]
    this.image3 = new Image()
    this.image3.src = arrImg[2]
    this.image4 = new Image()
    this.image4.src = arrImg[3]
    this.image5 = new Image()
    this.image5.src = arrImg[4]
    this.image6 = new Image()
    this.image6.src = arrImg[5]
    this.imageOfficial = this.image1
  }
  draw(){
    if(frames % 10 === 0){
      if(this.imageOfficial === this.image1){
        this.imageOfficial = this.image2
      } else if (this.imageOfficial === this.image2){
        this.imageOfficial = this.image3
      } else if (this.imageOfficial === this.image3){
        this.imageOfficial = this.image4
      } else if (this.imageOfficial === this.image4){
        this.imageOfficial = this.image5
      }else if (this.imageOfficial === this.image5){
        this.imageOfficial = this.image6
      } else {
        this.imageOfficial = this.image1
      }
    }
    ctx.drawImage(this.imageOfficial,this.x,this.y,this.w,this.h)
  }
  collision(item){
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    )
  }
}



/* class Character {
  constructor(width, height, health, img){
    this.width = width
    this.height = height
    this.health = health
    this.image = new Image()
    this.image.src = img
  }
  collision(item){
    return (
      mouseX < item.x + item.width &&
      mouseX + this.width > item.x &&
      mouseY < item.y + item.height &&
      mouseY + this.height > item.y
    )
  }
  draw(x,y){
    ctx.drawImage(this.image,x,y, this.width, this.height)
  }
}
 */
