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
      this.x < item.x + item.w &&
      this.x + this.w > item.x &&
      this.y < item.y + item.h &&
      this.y + this.h > item.y
    )
  }
}


class Enemy {
  constructor(arrImg,x,y,w,h,velocity){
    this.arrImg = arrImg
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.velocity = velocity

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
    this.image7 = new Image()
    this.image7.src = arrImg[6]
    this.image8 = new Image()
    this.image8.src = arrImg[7]
    this.image9 = new Image()
    this.image9.src = arrImg[8]
    this.imageOfficial = this.image1
  }
  draw(){
    if(frames % 14 === 0){
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
      }else if (this.imageOfficial === this.image6){
        this.imageOfficial = this.image7
      }else if (this.imageOfficial === this.image7){
        this.imageOfficial = this.image8
      }else if (this.imageOfficial === this.image8){
        this.imageOfficial = this.image9
      } else {
        this.imageOfficial = this.image1
      }
    }
    this.x -= this.velocity
    ctx.drawImage(this.imageOfficial,this.x,this.y,this.w,this.h)
    }
    collision(item){
      return (
        this.x < item.x + item.w &&
        this.x + this.w > item.x &&
        this.y < item.y + item.h &&
        this.y + this.h > item.y
      )
    }
}

class Slime {
  constructor(arrImg,x,y,w,h,velocity){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.velocity = velocity

    this.image1 = new Image()
    this.image1.src = arrImg[0]
    this.image2 = new Image()
    this.image2.src = arrImg[1]
    this.image3 = new Image()
    this.image3.src = arrImg[2]
    this.image4 = new Image()
    this.image4.src = arrImg[3]
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
      } else {
        this.imageOfficial = this.image1
      }
    }
    this.x -= this.velocity
    ctx.drawImage(this.imageOfficial, this.x, this.y, this.w, this.h)
  }
}


class Arrow{
  constructor(x,y,velocity,img){
    this.x = x
    this.y = y
    this.w = 60
    this.h = 10
    this.velocity = velocity

    this.image = new Image()
    this.image.src = img
  }
  draw(){
    this.x += this.velocity
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h)
  }
  collision(item){
    return (
      this.x < item.x + item.w &&
      this.x + this.w > item.x &&
      this.y < item.y + item.h &&
      this.y + this.h > item.y
    )
  }
}
