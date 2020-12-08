import React from 'react'
import { withRouter } from 'react-router-dom'
import './TitleScreen.scss'
import { inject } from 'mobx-react'
import classnames from 'classnames'

const NEXT_SCREEN_DELAY = 1500

@inject( 'playerSelection' )
class TitleScreen extends React.Component {

  state = {
    selectedOption: null,
  }

  onSelectOnePlayer = () => this.selectNumberOfPlayers( 1 )

  

  selectNumberOfPlayers( count ) {
    this.setState({ selectedOption: count })
    this.props.playerSelection.setNumberOfPlayers( count )
    this.nextScreenTimeout = setTimeout(() => {
      this.props.history.push('/player_select')  
    }, NEXT_SCREEN_DELAY )
  }

  componentWillUnmount() {
    clearTimeout( this.nextScreenTimeout )
  }

  render() {
    const { selectedOption } = this.state

    return (
      <div className='TitleScreen'>
        <img
          src='/assets/images/ui/title_screen.png'
          className='title-image'
          alt=''
        />
        <div className='start-button-container'>
          <div
            className={classnames('start-button', {selected: selectedOption === 1})}
            onClick={this.onSelectOnePlayer}
          >
            <div className='indicator' />
            <span>Start</span>
          </div>
          <div
            className={classnames('start-button', {selected: selectedOption === 2})}
            
          >
          </div>
        </div>
        <div className='instructions'>
          <span className='hover-hint'>Controls and Credits</span>
          <div className='instructions-text'>
            Controls
            MOVE: WASD      JUMP: Space     ATTACK: Enter  

            Credits
              The ACA Class of the crazy year 2020

              My Instructor Matt Huntsberry

              DC Comics

              The creator of Jeff the Killer...whoever you are.  <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter( TitleScreen )