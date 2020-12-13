import React from 'react'
import { withRouter} from 'react-router-dom'
import './TitleScreen.scss'
import { inject } from 'mobx-react'
import classnames from 'classnames'
import { Link } from 'react-router-dom';


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
            <span>Start!</span>
          </div>

              <Link to="/memeapi">
                  <span>Why so serious?</span>
                </Link>

        <div className='instructions'>

          <span className='hover-hint'>Credits</span>
          <div className='instructions-text'>
            HUGE THANK YOU to my teacher Matthew Huntsberry<br/>
            And the ACA Class of 2020!<br/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter( TitleScreen )