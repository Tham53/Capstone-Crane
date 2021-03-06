import GameObject from './GameObject'
import { observable } from 'mobx'
import { randomBetween } from '../shared/utils'

const X_FALLING_VEL = 3.5
const Z_FALLING_VEL = -4
const VEL_SPREAD = 2
const BOUNCE_VEL = 10

const BECOME_INVISIBLE_AT = -100

class Head extends GameObject {
  @observable
  spriteUrl = '/assets/images/gameObjects/head.png'

  animationTracks = {
    default: {
      frames: [
        { x: 0, y: 0 },
      ],
      duration: 100,
    }
  }

  @observable 
  spriteScale = '100%'

  @observable 
  screenWidth = 64

  @observable 
  screenHeight = 64

  @observable
  collisionWidth = 64

  @observable
  collisionHeight = 64

  @observable
  collisionDepth = 40

  @observable
  collisionBottom = 0

  constructor( props ) {
    super( props )
    this.setAnimation( 'default' )
    this.xVel = randomBetween( X_FALLING_VEL - VEL_SPREAD, X_FALLING_VEL + VEL_SPREAD )
    this.zVel = Z_FALLING_VEL
    this.setFreefall({
      x: this.xVel,
      y: 0,
      z: this.zVel
    }, 1)
  }

  onReturnToGround() {
    super.onReturnToGround()
    
    
    this.setFreefall({
      x: this.xVel,
      y: BOUNCE_VEL,
      z: this.zVel
    }, 1)
  }

  step( deltaTime ) {
    super.step( deltaTime )
    if ( this.position.z <= BECOME_INVISIBLE_AT ) {
      this.removeFromGame()
    }
  }
}

export default Head