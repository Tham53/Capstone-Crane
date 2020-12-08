import React from 'react'
import { observer } from 'mobx-react'
import './PlayerHUD.scss'

const MAX_DISPLAY_Courage = 12

@observer
class PlayerHUD extends React.Component {
  render() {
    const {
      name,
      courage,
      kills
    } = this.props.player

    return (
      <div className='player-hud'>
        <div className='name'>{name}</div>
        <div className='kills'>{kills}</div>
        <div className='courage-bar'>
          {[...Array( Math.min( courage, MAX_DISPLAY_Courage ))].map((_, i) => (
            <div className='courage' key={i}/>
          ))}
        </div>
      </div>
    )
  }
}

export default PlayerHUD