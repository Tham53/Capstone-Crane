import ThrowerEnemy from './ThrowerEnemy'
import BigknifeProjectile from './BigknifeProjectile'

class BigknifeEnemy extends ThrowerEnemy {
  longRangeAttackChance = 0.75

  longRangeAttackTimeout = 1500

  shortAttackRange = [ 0, 10 ]

  longAttackRange = [ 25, 250 ]

  projectileType = BigknifeProjectile

  throwHeight = 80

  leftThrowOffset = -40
  rightThrowOffset = 60

  animationTracks = {
    walking: {
      frames: [
        { x: 403, y: 25, width: 110 },
        { x: 520, y: 25, width: 110 },
        { x: 630, y: 25, width: 110 },
        { x: 520, y: 25, width: 110 },
      ],
      duration: 700,
    },
    attack: {
      frames: [
        { x: 403, y: 25, width: 110 },
        { x: 420, y: 330, width: 110 },
      ],
      duration: 600,
    },
    take_damage: {
      frames: [{ x: 52, y: 560 }],
      duration: 1000
    },
    dead: {
      frames: [{ x: 140, y: 550, width: 120 }],
      duration: 1000
    },
    explode: {
      frames: [
        { x: 400, y: 460 },
        { x: 490, y: 450, width: 100 },
        { x: 0, y: 0, width: 1 },
      ], 
      loopStartFrame: 2,
      introDuration: 200,
      duration: 1000,
    },
    throw: {
      frames: [
        { x: 403, y: 25, width: 110 },
        { x: 410, y: 195, width: 100 },
        { x: 520, y: 195, width: 110 },
      ],
      duration: 500,
    },
  }
}

export default BigknifeEnemy