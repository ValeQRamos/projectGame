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

class Enemy{
  constructor( health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    console.log('ataque');
    return this.strength
  }
  receiveDamage(damage){
    console.log('daño recibido');
    this.health -= damage
  }
}

class Heroe extends Enemy{
  constructor(type, name, health, mana, strength) {
    super(health,strength)
    this.type = type
    this.name = name
    this.mana = mana
  }
  specialMove(){
    if(this.type === 'warrior'){
      console.log('especial de warrior');
      this.strength += 12
      this.mana -= 100
    } else if (this.type === 'mage'){
      console.log('especial de mago');
      this.health += 16
      this.mana -= 40
    } else if (this.type === 'archer'){
      console.log('especial de arqeuro');
      this.strength += 5
      this.mana -= 50
    }
  }
}